function job(callback1, callback2) {
    setTimeout (callback1, 2000);
    const interval = setInterval(callback2, 1000);
    setTimeout(() => clearInterval(interval),4000)   
}
const callback1 = ()=>{
    console.log("callback1");
  }
  
  const callback2 = () =>{
      console.log("callback2");
  }
  job(callback1,callback2)



