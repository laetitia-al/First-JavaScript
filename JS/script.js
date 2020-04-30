
$("#btnNext").click(next);



function next(){
	
	//pour que la slide reste tjr de la meme taille 
	var windowWidth = $("#window").width();
	
	//Déplacer le rail vers la gauche de 300px : marge a gauche de -300px
	$("#rail").animate({"margin-left":-windowWidth}, 4000, endNext);
	
}

function endNext(){
	//Je prend le dernier et apres lui je mets le premier
	$(".slide:last").after( $(".slide:first") );
	//Revenir à 0 : marge à gauche de 0
	$("#rail").css("margin-left",0);
	
	var srcImgBack =  $(".slide:first").attr("attr-img");
	$("#scene").css("background-image", "url('"+srcImgBack+"')");
}

$("#btnLast").click(Last);

function Last(){
	$(".slide:first").before($(".slide:last"));
	$("#rail").css("margin-left",-300);
	$("#rail").animate({"margin-left":0},3000);
	
	var srcImgLast =  $(".slide:first").attr("attr-img");
	$("#scene").css("background-image", "url('"+srcImgLast+"')");
	
}

