const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// FINAL 폴더를 정적 파일로 제공
app.use(express.static(path.join(__dirname, 'FINAL')));

// 루트 경로 접속 시 index.html 제공
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FINAL', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
