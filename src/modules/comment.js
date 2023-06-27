const renderpopup = async (showid = 98) => {
  const container = document.getElementById('comment-popup-container');
  await fetch(`https://api.tvmaze.com/shows/${showid}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      container.innerHTML = `
       <div class="comments-container">
         <div class=info-wrapper>
         <div class="poster-container">
             <img src="${data.image.medium}" alt="" />
           </div>
           <div class="details-container">
             <div class="details-box">
               <h2 class="show-title heading">${data.name}</h2>
               <ul>
                 <li class="genresj normal">
                   Genres: ${data.genres}
                 </li>
                 <li class="language normal">Language: ${data.language}</li>
                 <li class="rating normal">IMDb Rating: ${data.rating.average}</li>
                 <li class="summary normal">Language: ${data.summary}</li>
               </ul>
             </div>
           </div> 
           </div> 
         
         </div>`;
    });
};

export default renderpopup;