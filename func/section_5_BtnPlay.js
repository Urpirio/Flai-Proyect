const Status = [{
    Statu: false,
}]




const Play_And_Pause = ({Id_IconBtn,Id_video,Id_Btn}) => {
    const Btn = document.getElementById(Id_Btn);
    const IconBtn = document.getElementById(Id_IconBtn);
    const Video = document.getElementById(Id_video);

    Video.addEventListener('mouseenter',()=>{
        Btn.style.display = 'flex';
    });

    Video.addEventListener('mouseleave',()=>{
        Btn.style.display = 'none';
    });

    Btn.addEventListener('mouseenter',()=>{
        Btn.style.display = 'flex';
    });

    Btn.addEventListener('mouseleave',()=>{
        Btn.style.display = 'none';
    });


    if(Status[0].Statu){
        (async ()=>{
            try{
                await Video.pause();
                IconBtn.className = 'bx bx-play';
                Btn.style.display = 'none';
                Status.forEach(Data => {Data.Statu = false})
            }
            catch{(err)=>{
            console.error(err)
            }
        }})()
    }else{
        ( async ()=>{
            try{
                await Video.play();
                IconBtn.className = 'bx bx-pause';
                Btn.style.display = 'none';
                Status.forEach(Data => {Data.Statu = true});
            }
            catch{(err)=>{
            console.error(err)
            }
        }})()
    }

    

    

}