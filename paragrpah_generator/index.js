const input=document.getElementById("numOfWords");
// input contains input by user
// input.value is value of input;
// cl(input) is full input tag
const container=document.getElementsByClassName("container");

const generateWord=(n)=>{

    const string="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let data="";
    for(let i=0;i<n;i++){
      const randomNumber=(Math.random()*25).toFixed(0);
      data+=string[randomNumber];
    }
    return data;
}


const generatePara=()=>{
    let numOfWords=Number(input.value);

  let data="";

  for(let i=0;i<numOfWords;i++){
     const randomNumber=(Math.random()*15).toFixed(0);
     data+=generateWord(randomNumber);
     data+=' ';
  }
  const para=document.createElement('p');
  // i create one paragraph tag
  para.setAttribute("class",'paras');
  // given class=paras

  para.innerText=data;

  container[0].append(para);
  // div with container contains it

};


