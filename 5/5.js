let year = +prompt( "yilni kiriting" );
if ( year % 400 == 0  ){
    alert("bu yil kabisa emas");
}

else if ( year % 4 == 0 ){
    alert ( "Bu yil kabisa" );
} 


else{
    alert("bu yil kabisa emas");
}