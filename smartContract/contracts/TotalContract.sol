// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    /*
     * 총 토큰의 양 반환
     */
    function totalSupply() external view returns (uint256);

    /*
     * 해당 오너가 보유한 토큰
     */
    function balanceOf(address _owner) external view returns (uint256);

    /*
     * 토큰 전송 (받는사람 주소에)
     */
    function transfer(address _to, uint256 _value)
        external
        payable
        returns (bool);

    /*
     * 토큰 전송 (받는사람에게 바로 보내기)
     */
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool);

    /*
     * 내가 사용할 수 있는 잔액을 따로 변수로 만들 것
     */
    function approve(address _spender, uint256 _value) external returns (bool);

    /*
     * 사용 가능한 금액을 반환해주는 함수
     */
    function allowance(address _owner, address _spender)
        external
        view
        returns (uint256);

    /*
     * 코인 전달할 때 이벤트가 발생될 수 있음
     * 잔액도 이벤트로 작성될 수 있음
     */
    event Transfer(address _from, address _to, uint256 _value);
    event Approval(address _from, address _to, uint256 _value);
}

contract StandardToken is ERC20 {
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;

    function totalSupply() external view override returns (uint256) {}

    function balanceOf(address _owner)
        external
        view
        override
        returns (uint256)
    {
        return balances[_owner];
    }

    function transfer(address _to, uint256 _value)
        external
        payable
        override
        returns (bool)
    {
        if (balances[msg.sender] >= _value && _value > 0) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            emit Transfer(msg.sender, _to, _value);
        } else {
            return false;
        }
    }

    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external override returns (bool) {
        if (balances[_from] >= _value && _value > 0) {
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            allowed[_from][_to] -= _value;
            emit Transfer(_from, _to, _value);
            return true;
        } else {
            return false;
        }
    }

    function approve(address _spender, uint256 _value)
        external
        override
        returns (bool)
    {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);
        return true;
    }

    function allowance(address _owner, address _spender)
        external
        view
        override
        returns (uint256)
    {
        return allowed[_owner][_spender];
    }
}

contract DWToken is StandardToken {
    string public name; //token name
    uint8 public decimals; //소수점(18)to using wei
    string public symbol; //unit of Token
    string public version; //버전 정보 변수 (1.0.0)
    uint256 public unitOneEthCanBuy; //1ETH로 구매 가능한 토큰 수 정의
    uint256 public totalEthInWei; //총 발행 토큰 수
    address public fundWallet; //ETH를 받을 이더리움 주소

    constructor() public payable {
        name = "DigitalWarriotToken";
        decimals = 18;
        symbol = "DWT";
        unitOneEthCanBuy = 100;
        fundWallet = msg.sender; //배포한 사람의 주소
        balances[msg.sender] = 10000000000000000000000;
    }

    fallback() external payable {
        totalEthInWei = totalEthInWei + msg.value;
        uint256 amount = msg.value * unitOneEthCanBuy;
        require(balances[fundWallet] >= amount);

        balances[fundWallet] -= amount;
        balances[msg.sender] += amount;

        emit Transfer(fundWallet, msg.sender, amount);

        payable(fundWallet).transfer(msg.value);
    }

    function approveAndCall(
        address _spender,
        uint256 _value,
        bytes memory _extraData
    ) public returns (bool) {
        allowed[msg.sender][_spender] = _value;
        emit Approval(msg.sender, _spender, _value);

        (bool success, bytes memory data) = _spender.call(
            abi.encodeWithSignature(
                "receiveApproval(address,uint256,address,bytes)",
                msg.sender,
                _value,
                address(this),
                _extraData
            )
        ); //보낸사람으로부터 함수를 실행하겠다.

        require(success, "call failed");
        return true;
    }
}
