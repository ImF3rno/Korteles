let containers=document.querySelectorAll('.carousel-container');
fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
  .then(response=>response.json())
  .then(data=>{
    containers.forEach((containerDiv,index)=>{
      let h3=document.createElement("h3");
      let span=document.createElement("span");
      let img=document.createElement("img");
      img.src="svg/quotation-marks.svg";
      span.appendChild(img);
      h3.appendChild(span);
      let quote=document.createTextNode(data[index].quote);
      h3.appendChild(quote);
      let p=document.createElement("p");
      p.textContent="- "+data[index].author;
      containerDiv.appendChild(h3);
      containerDiv.appendChild(p);
    });
})