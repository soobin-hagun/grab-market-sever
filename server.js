const express = require("express");
const cors = require('cors');
const app = express();
const port = 8080;

app.use(express.json()); //json 형식의 데이터를 처리할 수 있게 설정하는 코드
app.use(cors()) //브라우저의 CORS 이슈를 막기 위해 사용하는 코드

app.get('/products', async (req, res) => {
    res.send('업로드 된 상품들입니다.')
})

app.post("/products", async (req, res) => {
    res.send('상품이 등록되었습니다.')
});

//세팅한 app을 실행시킨다.
app.listen(port, () => {
    console.log('그랩의 쇼핑몰 서버가 돌아가고 있습니다.');
});