pragma solidity ^0.8.0;

interface ERC20 {
    /*
    * 총 토큰의 양 반환
    */
    function totalSupply() external view returns(uint256);

    /*
    * 해당 오너가 보유한 토큰
    */
    function balanceOf(address _owner) external view returns(uint256);

    /*
    * 토큰 전송 (받는사람 주소에)
    */
    function transfer(address _to, uint _value) external payable returns(bool);

    /*
    * 토큰 전송 (받는사람에게 바로 보내기)
    */
    function transferFrom(address _from, address _to, uint256 _value) external returns(bool);
    
}

contract StandardToken is ERC20{
    mapping(address => uint256) balances;
    mapping(address => mapping(address=>uint256)) allowed;

    function totalSupply() override external view returns(uint256){}
    function balanceOf(address _owner) override external view returns(uint256){
        return balances[_owner];
    }
    function transfer(address _to,uint _value) override external payable returns(bool){
        if(balances[msg.sender]>=_value && _value>0){
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            emit Transfer(msg.sender, _to, _value);
        }else{
            return false;
        }
    }
    function transferFrom(address _from, address _to, uint256 _value) override external returns(bool){
        if(balances[_from]>= _value && _value >0){
            balances[msg.sender] -= _value;
            balances[_to] += _value;
            allowed[_from][_to] -= _value;
            emit Transfer(_from, _to, _value);
            return true;
        }else{
            return false;
        }
    }
}