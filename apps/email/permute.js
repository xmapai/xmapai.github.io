// $("#empty-required").hide();
// $(".not-initial").hide();
$("#fewer-domains").hide();
// $(".nav-desc").hide(); // hides the text of the nav, so they can be revealed on mouseover
var firstName;
var firstInitial;
var lastName;
var lastInitial
var middleName;
var middleInitial;
var nickName;
var nickInitial;
var domain1;
var domain2;
var domain3;
var emailOutput = new Array();
var $copyButton = $("#copy-permutations");

// FOR ZEROCLIPBOARD
var clip = new ZeroClipboard($("#copy-permutations"));


//Determine if required fields are blank
function requiredAreBlank () {
	var blanks = $(".required").map(function (){
		return $(this).val() == "";
	});
	return $.inArray(true,blanks) != -1;
}

// Checks nickName for existance and uniqueness against firstName
// When deciding whether or not to make email permutations with it.
function checkNN (formula) {
	if (nickName != "" && nickName != firstName) {
		emailOutput.push(formula)
	};
}

// Checks nickInitial for existance and uniqueness against firstInitial
// when deciding whether or not to make email permutations with it.
function checkNI (formula) {
	if (nickInitial != "" && nickInitial != firstInitial) {
		emailOutput.push(formula)
	};
}

// Checks that Middle Initial exists
function checkMidIn (formula) {
	if (middleInitial != "" ) {
		emailOutput.push(formula)
	};
}

// Checks that Middle Name Exists
function checkMidNam (formula) {
	if (middleName != "" && middleName != middleInitial ) {
		emailOutput.push(formula)
	};
}

// Checks that nickInitial exists and != firstInitial, and that Middle Initial exists
function checkNIandMI (formula) {
	if (nickInitial != "" && nickInitial != firstInitial && middleInitial != "" ) {
		emailOutput.push(formula)
	};
}

// Checks that nickName exists and != firstName, and that Middle Initial Exists
function checkNNandMI (formula) {
	if (nickName != "" && nickName != firstName && middleInitial != "" ) {
		emailOutput.push(formula)
	};
}

// Checks that nickName exists and != firstName, and that Middle Name Exists and != middleInitial
function checkNNandMN (formula) {
	if (nickName != "" && nickName != firstName && middleName != "" && middleName != middleInitial ) {
		emailOutput.push(formula)
	};
}


// All email permutations by email
// If nickInitial != firstInitial, then run versions for that as well
// Make all middle name/initial ones only fire if there is one
// split emailsByDomain into common emails, less common, uncommon,
// THEN run for each domain entered, so you get the most likely emails first
/** Nickname, middle name -- check for:
- nickName exists
- nickInitial != firstInitial
- middleName exists
**/
// Most Common, 

// Original Giant email permutation function
// function emailsByDomain (theDomain) {
// 	emailEnder = "@" + theDomain; 

// 	emailOutput.push(
// 		//complete
// 		firstName + emailEnder, // First Name
// 		lastName + emailEnder, // {ln}
// 		firstName + lastName + emailEnder, // {fn}{ln}
// 		firstName + "." + lastName + emailEnder, // {fn}.{ln}
// 		firstInitial + lastName + emailEnder, // {fi}{ln}
// 		firstInitial + "." + lastName + emailEnder, // {fi}.{ln}
// 		firstName + lastInitial + emailEnder, // {fn}{li}
// 		firstName + "." + lastInitial + emailEnder, // {fn}.{li}
// 		firstInitial + lastInitial + emailEnder, // {fi}{li}
// 		firstInitial + "." + lastInitial + emailEnder, // {fi}.{li}
// 		//prev complete

// 		//complete
// 		lastName + firstName + emailEnder, // {ln}{fn}
// 		lastName + "." + firstName + emailEnder, // {ln}.{fn}
// 		lastName + firstInitial + emailEnder, // {ln}{fi}
// 		lastName + "." + firstInitial + emailEnder, // {ln}.{fi}
// 		lastInitial + firstName + emailEnder, // {li}{fn}
// 		lastInitial + "." + firstName + emailEnder, // {li}.{fn}
// 		lastInitial + firstInitial + emailEnder, // {li}{fi}
// 		lastInitial + "." + firstInitial + emailEnder, // {li}.{fi}
// 		//prev complete

// 		//complete
// 		firstInitial + middleInitial + lastName + emailEnder, // {fi}{mi}{ln}
// 		firstInitial + middleInitial + "." + lastName + emailEnder, // {fi}{mi}.{ln}
// 		firstName + middleInitial + lastName + emailEnder, // {fn}{mi}{ln}
// 		firstName + "." + middleInitial + "." + lastName + emailEnder, // {fn}.{mi}.{ln}
// 		firstName + middleName + lastName + emailEnder, // {fn}{mn}{ln}
// 		firstName + "." + middleName + "." + lastName + emailEnder, // {fn}.{mn}.{ln}
// 		//prev complete


// 		firstName + "-" + lastName + emailEnder, // {fn}-{ln}
// 		firstInitial + "-" + lastName + emailEnder, // {fi}-{ln}
// 		firstName + "-" + lastInitial + emailEnder, // {fn}-{li}
// 		firstInitial + "-" + lastInitial + emailEnder, // {fi}-{li}
// 		lastName + "-" + firstName + emailEnder, // {ln}-{fn}
// 		lastName + "-" + firstInitial + emailEnder, // {ln}-{fi}
// 		lastInitial + "-" + firstName + emailEnder, // {li}-{fn}
// 		lastInitial + "-" + firstInitial + emailEnder, // {li}-{fi}
// 		firstInitial + middleInitial + "-" + lastName + emailEnder, // {fi}{mi}-{ln}
// 		firstName + "-" + middleInitial + "-" + lastName + emailEnder, // {fn}-{mi}-{ln}
// 		firstName + "-" + middleName + "-" + lastName + emailEnder, // {fn}-{mn}-{ln}



// 		firstName + "_" + lastName + emailEnder, // {fn}_{ln}
// 		firstInitial + "_" + lastName + emailEnder, // {fi}_{ln}
// 		firstName + "_" + lastInitial + emailEnder, // {fn}_{li}
// 		firstInitial + "_" + lastInitial + emailEnder, // {fi}_{li}
// 		lastName + "_" + firstName + emailEnder, // {ln}_{fn}
// 		lastName + "_" + firstInitial + emailEnder, // {ln}_{fi}
// 		lastInitial + "_" + firstName + emailEnder, // {li}_{fn}
// 		lastInitial + "_" + firstInitial + emailEnder, // {li}_{fi}
// 		firstInitial + middleInitial + "_" + lastName + emailEnder, // {fi}{mi}_{ln}
// 		firstName + "_" + middleInitial + "_" + lastName + emailEnder, // {fn}_{mi}_{ln}
// 		firstName + "_" + middleName + "_" + lastName + emailEnder // {fn}_{mn}_{ln}
		
// 	);
// };

// Most Common Emails, including nickName and nickInitial Variations
// nickName versions check for existance
// nickInitial versions chck for existance and uniqueness against firstInitial
function commonEmails (theDomain) {
	emailEnder = "@" + theDomain; 

		emailOutput.push( firstName + emailEnder ); // First Name
		checkNN( nickName + emailEnder ); // Nick Name
		emailOutput.push( lastName + emailEnder ); // {ln}
		emailOutput.push( firstName + lastName + emailEnder ); // {fn}{ln}
		checkNN( nickName + lastName + emailEnder); // {nn}{ln}
		emailOutput.push( firstName + "." + lastName + emailEnder ); // {fn}.{ln}
		checkNN( nickName + "." + lastName + emailEnder ); // {nn}.{ln}
		emailOutput.push( firstInitial + lastName + emailEnder ); // {fi}{ln}
		checkNI( nickInitial + lastName + emailEnder ); // {ni}{ln}
		emailOutput.push( firstInitial + "." + lastName + emailEnder ); // {fi}.{ln}
		checkNI( nickInitial + "." + lastName + emailEnder ); // {ni}.{ln}
		emailOutput.push( firstName + lastInitial + emailEnder ); // {fn}{li}
		checkNN( nickName + lastInitial + emailEnder ); // {nn}{li}
		emailOutput.push( firstName + "." + lastInitial + emailEnder ); // {fn}.{li}
		checkNN( nickName + "." + lastInitial + emailEnder); // {nn}.{li}
		emailOutput.push( firstInitial + lastInitial + emailEnder ); // {fi}{li}
		checkNI( nickInitial + lastInitial + emailEnder ); // {ni}{li}
		emailOutput.push( firstInitial + "." + lastInitial + emailEnder ); // {fi}.{li}
		checkNI( nickInitial + "." + lastInitial + emailEnder ); // {ni}.{li}
};

// Email Permutations that begin with last names
function lessCommonEmails (theDomain) {
	emailEnder = "@" + theDomain; 

		emailOutput.push( lastName + firstName + emailEnder ); // {ln}{fn}
		checkNN( lastName + nickName + emailEnder ); // {ln}{nn}
		emailOutput.push( lastName + "." + firstName + emailEnder ); // {ln}.{fn}
		checkNN( lastName + "." + nickName + emailEnder ); // {ln}.{nn}
		emailOutput.push( lastName + firstInitial + emailEnder ); // {ln}{fi}
		checkNI( lastName + nickInitial + emailEnder ); // {ln}{ni}
		emailOutput.push( lastName + "." + firstInitial + emailEnder ); // {ln}.{fi}
		checkNI( lastName + "." + nickInitial + emailEnder ); // {ln}.{ni}
		emailOutput.push( lastInitial + firstName + emailEnder ); // {li}{fn}
		checkNN( lastInitial + nickName + emailEnder ); // {li}{nn}
		emailOutput.push( lastInitial + "." + firstName + emailEnder ); // {li}.{fn}
		checkNN( lastInitial + "." + nickName + emailEnder ); // {li}.{nn}
		emailOutput.push( lastInitial + firstInitial + emailEnder ); // {li}{fi}
		checkNI( lastInitial + nickInitial + emailEnder ); // {li}{ni}
		emailOutput.push( lastInitial + "." + firstInitial + emailEnder ); // {li}.{fi}
		checkNI( lastInitial + "." + nickInitial + emailEnder ); // {li}.{ni}
};

// Emails that contain middle names and initials
function middleEmails (theDomain) {
	emailEnder = "@" + theDomain; 

		checkMidIn( firstInitial + middleInitial + lastName + emailEnder );  // {fi}{mi}{ln}
		checkNIandMI( nickInitial + middleInitial + lastName + emailEnder );  // {ni}{mi}{ln}
		checkMidIn( firstInitial + middleInitial + "." + lastName + emailEnder );  // {fi}{mi}.{ln}
		checkNIandMI( nickInitial + middleInitial + "." + lastName + emailEnder );  // {ni}{mi}.{ln}
		checkMidIn( firstName + middleInitial + lastName + emailEnder );  // {fn}{mi}{ln}
		checkNNandMI( nickName + middleInitial + lastName + emailEnder );  // {nn}{mi}{ln}
		checkMidIn( firstName + "." + middleInitial + "." + lastName + emailEnder );  // {fn}.{mi}.{ln}
		checkNNandMI( nickName + "." + middleInitial + "." + lastName + emailEnder );  // {nn}.{mi}.{ln}
		checkMidNam( firstName + middleName + lastName + emailEnder );  // {fn}{mn}{ln}
		checkNNandMN( nickName + middleName + lastName + emailEnder );  // {nn}{mn}{ln}
		checkMidNam( firstName + "." + middleName + "." + lastName + emailEnder );  // {fn}.{mn}.{ln}
		checkNNandMN( nickName + "." + middleName + "." + lastName + emailEnder );  // {nn}.{mn}.{ln}
};

// Emails using dashes
function dashEmails (theDomain) {
	emailEnder = "@" + theDomain; 

		emailOutput.push( firstName + "-" + lastName + emailEnder ); // {fn}-{ln}
		checkNN( nickName + "-" + lastName + emailEnder ); // {nn}-{ln}
		emailOutput.push( firstInitial + "-" + lastName + emailEnder ); // {fi}-{ln}
		checkNI( nickInitial + "-" + lastName + emailEnder ); // {ni}-{ln}
		emailOutput.push( firstName + "-" + lastInitial + emailEnder ); // {fn}-{li}
		checkNN( nickName + "-" + lastInitial + emailEnder ); // {nn}-{li}
		emailOutput.push( firstInitial + "-" + lastInitial + emailEnder ); // {fi}-{li}
		checkNI( nickInitial + "-" + lastInitial + emailEnder ); // {ni}-{li}
		emailOutput.push( lastName + "-" + firstName + emailEnder ); // {ln}-{fn}
		checkNN( lastName + "-" + nickName + emailEnder ); // {ln}-{nn}
		emailOutput.push( lastName + "-" + firstInitial + emailEnder ); // {ln}-{fi}
		checkNI( lastName + "-" + nickInitial + emailEnder ); // {ln}-{ni}
		emailOutput.push( lastInitial + "-" + firstName + emailEnder ); // {li}-{fn}
		checkNN( lastInitial + "-" + nickName + emailEnder ); // {li}-{nn}
		emailOutput.push( lastInitial + "-" + firstInitial + emailEnder ); // {li}-{fi}
		checkNI( lastInitial + "-" + nickInitial + emailEnder ); // {li}-{ni}
		checkMidIn( firstInitial + middleInitial + "-" + lastName + emailEnder ); // {fi}{mi}-{ln}
		checkNIandMI( nickInitial + middleInitial + "-" + lastName + emailEnder ); // {ni}{mi}-{ln}
		checkMidIn( firstName + "-" + middleInitial + "-" + lastName + emailEnder ); // {fn}-{mi}-{ln}
		checkNNandMI( nickName + "-" + middleInitial + "-" + lastName + emailEnder ); // {nn}-{mi}-{ln}
		checkMidNam( firstName + "-" + middleName + "-" + lastName + emailEnder ); // {fn}-{mn}-{ln}
		checkNNandMN( nickName + "-" + middleName + "-" + lastName + emailEnder ); // {nn}-{mn}-{ln}
};

// Emails using Underscores
function underscoreEmails (theDomain) {
	emailEnder = "@" + theDomain; 

		emailOutput.push( firstName + "_" + lastName + emailEnder ); // {fn}_{ln}
		checkNN( nickName + "_" + lastName + emailEnder ); // {nn}_{ln}
		emailOutput.push( firstInitial + "_" + lastName + emailEnder ); // {fi}_{ln}
		checkNI( nickInitial + "_" + lastName + emailEnder ); // {ni}_{ln}
		emailOutput.push( firstName + "_" + lastInitial + emailEnder ); // {fn}_{li}
		checkNN( nickName + "_" + lastInitial + emailEnder ); // {nn}_{li}
		emailOutput.push( firstInitial + "_" + lastInitial + emailEnder ); // {fi}_{li}
		checkNI( nickInitial + "_" + lastInitial + emailEnder ); // {ni}_{li}
		emailOutput.push( lastName + "_" + firstName + emailEnder ); // {ln}_{fn}
		checkNN( lastName + "_" + nickName + emailEnder ); // {ln}_{nn}
		emailOutput.push( lastName + "_" + firstInitial + emailEnder ); // {ln}_{fi}
		checkNI( lastName + "_" + nickInitial + emailEnder ); // {ln}_{ni}
		emailOutput.push( lastInitial + "_" + firstName + emailEnder ); // {li}_{fn}
		checkNN( lastInitial + "_" + nickName + emailEnder ); // {li}_{nn}
		emailOutput.push( lastInitial + "_" + firstInitial + emailEnder ); // {li}_{fi}
		checkNI( lastInitial + "_" + nickInitial + emailEnder ); // {li}_{ni}
		checkMidIn( firstInitial + middleInitial + "_" + lastName + emailEnder ); // {fi}{mi}_{ln}
		checkNIandMI( nickInitial + middleInitial + "_" + lastName + emailEnder ); // {ni}{mi}_{ln}
		checkMidIn( firstName + "_" + middleInitial + "_" + lastName + emailEnder ); // {fn}_{mi}_{ln}
		checkNNandMI( nickName + "_" + middleInitial + "_" + lastName + emailEnder ); // {nn}_{mi}_{ln}
		checkMidNam( firstName + "_" + middleName + "_" + lastName + emailEnder ); // {fn}_{mn}_{ln}
		checkNNandMN( nickName + "_" + middleName + "_" + lastName + emailEnder ); // {nn}_{mn}_{ln}
};

// Makes the extra domains appear, and the button dissapear
$("#more-domains").click(function(){
	$("#more-domains").hide();
	$(".not-initial").fadeIn();
	$("#fewer-domains").fadeIn();
});

// Makes the extra domains appear, and the button dissapear
$("#fewer-domains").click(function(){
	$("#fewer-domains").hide();
	$(".not-initial").hide();
	$("#more-domains").show();
	$("#domain2, #domain3").val("");
});

$(".required").keyup(function(){
	$(".required").each(function(){
		if ($(this).val() != "") $(this).parent().parent().removeClass("error").addClass("warning");
	});
});

// Triggers all the Calculatons to Happen
$("#permutateBtn").click(function() {

// Test that this is running
	// alert("boom!");

	// If required fields are empty...
	if (requiredAreBlank()) {
		// Shake the container and give alert
		if ($('#middle-center-zone').hasClass('animated') != true) {
			$(".required").each(function(){
				if($(this).val() == "") $(this).parent().parent().removeClass("warning").addClass("error");
			});
			$('#middle-center-zone').addClass('animated shake');

			setTimeout(function(){
			     $(".container").prepend('<div class="alert alert-error fade in" id="empty-required">' +
			     '<button type="button" class="close" data-dismiss="alert">&times;</button><strong>' +
			     'Warning!</strong> Some required fields appear to be empty.</div>');
			  }, 1200);
		}
		// add subsequent alerts
		else {
			$(".required").each(function(){
				if($(this).val() == "") $(this).parent().parent().addClass("error");
			});
			$(".container").prepend('<div class="alert alert-error fade in" id="empty-required">' +
			     '<button type="button" class="close" data-dismiss="alert">&times;</button><strong>' +
			     'Warning!</strong> Some required fields appear to be empty.</div>');
		}
	} 
	// Do the permutations
	else {

		// Make sure the Array is empty, in case this is run multiple times
		emailOutput = [];

		// Put the form field data into variables
		firstName = $("#firstName").val().trim().toLowerCase();
		firstInitial = firstName.charAt(0);
		lastName = $("#lastName").val().trim().toLowerCase();
		lastInitial = lastName.charAt(0);
		nickName = $("#nickName").val().trim().toLowerCase();
		nickInitial = nickName.charAt(0);
		middleName = $("#middleName").val().trim().toLowerCase();
		middleInitial = middleName.charAt(0);
		domain1 = $("#domain1").val().trim().toLowerCase();
		domain2 = $("#domain2").val().trim().toLowerCase();
		domain3 = $("#domain3").val().trim().toLowerCase();

		// Run each category of email permutation for each domain
		commonEmails(domain1);
		if (domain2 != "") { commonEmails(domain2); };
		if (domain3 != "") { commonEmails(domain3); };

		lessCommonEmails(domain1);
		if (domain2 != "") { lessCommonEmails(domain2); };
		if (domain3 != "") { lessCommonEmails(domain3); };

		middleEmails(domain1);
		if (domain2 != "") { middleEmails(domain2); };
		if (domain3 != "") { middleEmails(domain3); };

		dashEmails(domain1);
		if (domain2 != "") { dashEmails(domain2); };
		if (domain3 != "") { dashEmails(domain3); };

		underscoreEmails(domain1);
		if (domain2 != "") { underscoreEmails(domain2); };
		if (domain3 != "") { underscoreEmails(domain3); };

		// Put the permutated Emails in the modal textarea
		$("#finalResult").html(emailOutput.join("\n"));

		// Count number of email addresses, and add to modal window header
		$("#h1-in-modal span").html(emailOutput.length);

		// create the backdrop and wait for next modal to be triggered
 		 $('body').modalmanager('loading');

 		 setTimeout(function(){
		     $("#modalResult").modal('toggle').on('shown', function () {
				$("#finalResult").select();
				});
		  }, 700);

		// $("#modalResult").modal('toggle').on('shown', function () {
		// 	$("#finalResult").select();
		// });


		// // For Testing Purposes
		// console.log(emailOutput);
	};
});

// ZeroClipboard Section
// clip.on( 'load', function ( client, args ) {
// 	//alert( "movie has loaded" );

// });

clip.on( 'mouseover', function ( client, args ) {
//  alert( "mouse is over movie" );
	$copyButton.addClass('hover');
});

clip.on( 'mouseout', function ( client, args ) {
// alert( "mouse has left movie" );
	$copyButton.removeClass('hover');
	$copyButton.removeClass('active');
} );

clip.on( 'mousedown', function ( client, args ) {
// alert( "mouse button is down" );
	$copyButton.addClass('active');
} );

clip.on( 'mouseup', function ( client, args ) {
// alert( "mouse button is up" );
	$copyButton.removeClass('active');
} );

clip.on( 'complete', function ( client, args ) {
	//  alert("Copied text to clipboard: " + args.text );
	$(".modal-scrollable").prepend('<div class="alert alert-success fade in" id="successful-copy">' +
	'<strong>Success!</strong> Emails copied to clipboard.</div>');

	setTimeout(function(){
		$("#successful-copy").slideUp('fast',function(){
			$(this).remove();
		});
	},1200);
} );


// Make Sparrow message appear or disappear
$('#mr-sparrow, #sparrow-message').click(function(){
	$('#sparrow-message').fadeToggle(80);
});


// Navigation Items
	// Make Nav Text reveal on mouseover
	$(".spw-nav-item").hover(
		function(){
			$(this).find('.nav-desc').show();
		},
		function(){
			$(this).find('.nav-desc').hide();
		}
	);

	// Make the whole blog nav div function as a link
	$('#nav-blog').click(function(){
	     window.location=$(this).find("a").attr("href");
	});

	// Make Bio Popover -- FIX LATER currently just a link
		// $('#nav-about').popover({
		//     title: 'Bio',
		//     content: 'LALALAAL TEST TEST TEST WOOO' + 'DOES THIS WORK?',
		//     placement: 'bottom',
		//     trigger: 'click',
		//     animation: true,
		// });
	
	// Make Info Modal Pop Up
	$('#nav-info').click(function(){
		$('body').modalmanager('loading');
		$('#modalInfo').modal('toggle');
	});

	// Make Bio Modal Pop Up
	$('#nav-about').click(function(){
		$('body').modalmanager('loading');
		$('#modalBio').modal('toggle');
		return false;
	});

	// Make How To Modal Pop Up
	$('#the-instructions').click(function(){
		$('body').modalmanager('loading');
		$('#modalHowto').modal('toggle');
		return false;
	});




















