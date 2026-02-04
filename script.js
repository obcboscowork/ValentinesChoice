body {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  width: 320px;
}

h1 {
  color: #ff4b5c;
}

img {
  width: 200px;
  margin: 20px 0;
}

.buttons {
  display: flex;
  justify-content: space-around;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
}

#yesBtn {
  background-color: #4CAF50;
  color: white;
}

#noBtn {
  background-color: #ff4b5c;
  color: white;
  position: relative;
}

button:hover {
  transform: scale(1.1);
}

#message {
  font-size: 20px;
  color: #ff4b5c;
  margin-top: 20px;
}
