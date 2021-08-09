.ComponentC2 {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: lightgrey;
    .form-box {
      border-radius: 0.25rem;
      min-width: 22.5rem;
      border: 1px solid blue;
      background-color: rgba(255, 255, 255, 0.3);
    }
  
    .form-header {
      text-align: center;
    }
    .form-row {
      margin: 1rem;
  
      & > input,
      & > button {
        border-radius: 0.25rem;
      }
  
      & > label {
        width: 100%;
        justify-content: flex-start;
        padding: 5px;
      }
  
      & > input {
        outline: none;
        padding: 0.7rem;
        margin: 5px;
        border: none;
        font-size: 1rem;
        width: 90%;
      }
  
      & > button {
        width: 100%;
        padding: 0.5rem;
        background-color: blue;
        color: #fff;
        font-size: 1rem;
        font-weight: 800;
        border: none;
      }
      & > small {
        color: red;
        font-size: 10;
        padding: 5px;
      }
    }
  }
  