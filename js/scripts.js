if(screen.width<=375)
{
    var share = document.querySelector(".share");
    
    share.addEventListener("hover",()=>
    {
        var profile = document.querySelector(".profile");
        profile.style.display="none";

        share.style.display="block";
    }
    );
}