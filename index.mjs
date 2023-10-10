import fetch from 'node-fetch';

const fff = async () => {
  const res = await fetch('https://todo.nskcollege.ru/api/projects', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImUzZTc5NGNiLTliYWEtNDQzMy1hZDYzLTI0ODAxY2Y3YWY4YiJ9.eyJpYXQiOjE2OTI4NzAxNzQsInN1YiI6IjEwNTM1NjEyNjg1NDk0NTI4MzMiLCJleHAiOjE3MjQ0MDYxNzR9.FJ1Se8A0HwLLiC1c_FVw_tYuwubA09nibW7d3-G4Cz8',
    },
  });

  const data = await res.json();
  console.log(data);
};

fff();
// fetch('https://todo.nskcollege.ru')
//   .then((res) => res.json())
//   .then((asd) => console.log(asd));
