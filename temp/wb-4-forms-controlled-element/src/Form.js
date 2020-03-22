import React from "react";

const Gender = {
  MALE: "male",
  FEMALE: "female"
};

const Form = ({
  onSubmitForm,
  onChangeInput,
  login,
  email,
  password,
  agreed,
  gender,
  age
}) => (
  <>
    <form onSubmit={onSubmitForm}>
      <h4>Choose your gender</h4>
      <label>
        Male
        <input
          type="radio"
          checked={gender === Gender.MALE}
          name="gender"
          value={Gender.MALE}
          onChange={onChangeInput}
        />
      </label>
      <label>
        Female
        <input
          type="radio"
          checked={gender === Gender.FEMALE}
          name="gender"
          value={Gender.FEMALE}
          onChange={onChangeInput}
        />
      </label>
      <br />
      <br />

      <label>
        Choose your age
        <select name="age" value={age} onChange={onChangeInput}>
          <option value="" disabled>
            ...
          </option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-36</option>
          <option value="36+">37+</option>
        </select>
      </label>
      <br />

      <label>
        Name
        <input
          onChange={onChangeInput}
          type="text"
          placeholder="Enter your login"
          name="login"
          value={login}
        ></input>
      </label>
      <br />

      <label>
        Email
        <input
          onChange={onChangeInput}
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
        ></input>
      </label>
      <br />

      <label>
        Password
        <input
          onChange={onChangeInput}
          type="password"
          placeholder="Enter your password"
          name="password"
          value={password}
        ></input>
      </label>
      <br />

      <label>
        Agree to terms
        <input
          onChange={onChangeInput}
          type="checkbox"
          checked={agreed}
        ></input>
      </label>
      <br />

      <button type="submit" disabled={!agreed}>
        Sign up as {login}
      </button>
    </form>
  </>
);

export default Form;
