const API_KEY=`3febd67b40a96db06f4ad85b85c2400e`

const LoadTemparature= async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   const res=await fetch(url);
   const data=await res.json();
   disPlayTemparature(data)
   console.log(data)
}

const disPlayTemparature=data=>{
    setInnerTextById('temparature__id',data.main.temp)
    setInnerTextById('cityName',data.name)
    setInnerTextById('cloud_condition',data.weather[0].main)
    console.log(data); 
}


const Search=document.getElementById('searchId');
Search.addEventListener('click',()=>{
    const searchText=document.getElementById('inputId');
    const cityName=searchText.value
    console.log(cityName);
    LoadTemparature(cityName);

})

const setInnerTextById=(id,text)=>{
    const temparature=document.getElementById(id);
    temparature.innerText=text;
}


