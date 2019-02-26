<template>
  <div class="loginForm">
    <div class="loginLogo">
      <img src="../assets/logo.png">
    </div>
    <i-form v-ref:form-validate :model="formValidate" :rules="ruleValidate">
      <Form-item prop="phone">
        <i-input :value.sync="formValidate.phone" placeholder="请输入手机"></i-input>
      </Form-item>
      <Form-item prop="role">
        <i-select :model.sync="formValidate.role" placeholder="请选择所在角色">
          <i-option value="admin">管理员</i-option>
          <i-option value="users">用户</i-option>
          <i-option value="superUsers">超级用户</i-option>
        </i-select>
      </Form-item>
      <Form-item prop="password">
        <i-input :value.sync="formValidate.password" placeholder="请输入密码"></i-input>
      </Form-item>
    </i-form>
    <span class="confirm">确定</span>
    <div class="loginInfo">
      <span class="forget left">忘记密码?</span>
      <span class="create right">创建账号</span>
      <div style="clear:both;"></div>
    </div>
    <div class="loginInfo">
      <div class="loginInfo_img">
        <img src="../assets/loginInfo.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        phone: "",
        password: "",
        role: ""
      },
      ruleValidate: {
        phone: [{ required: true, message: "姓名不能为空", trigger: "blur" }],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { type: "password", message: "密码不能为空", trigger: "blur" }
        ],
        role: [{ required: true, message: "请选择角色", trigger: "blur" }]
      }
    };
  }
};
</script>
<style>
.loginForm {
  width: 100%;
  height: 100%;
  background: #fff;
  left: 0;
  top: 0;
  position: fixed;
}
.loginLogo {
  width: 7rem;
  height: 7rem;
  overflow: hidden;
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loginLogo > img {
  width: 70%;
}
.ivu-form-label-right {
  width: 80%;
  margin-left: 10%;
}
.ivu-input {
  height: 45px;
}
.confirm {
  width: 80%;
  margin-left: 10%;
  height: 3rem;
  background-color: rgb(62, 186, 69);
  border-radius: 5px;
  display: block;
  text-align: center;
  line-height: 3rem;
  color: #fff;
}
.loginInfo {
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  color: rgb(62, 186, 69);
}
.ivu-select-single .ivu-select-selection {
  height: 45px;
}
.ivu-select-single .ivu-select-selection .ivu-select-placeholder,
.ivu-select-single .ivu-select-selection .ivu-select-selected-value {
  line-height: 45px;
}
.loginInfo_img {
  margin-top: 5rem;
  width: 100%;
  overflow: hidden;
}
.loginInfo_img > img {
  display: block;
  margin: 0 auto;
  width: 80%;
}
@media screen and (max-height:480px){
    .loginForm{
        overflow: scroll;
    }
}
</style>