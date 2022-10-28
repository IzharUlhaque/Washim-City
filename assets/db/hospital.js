const hospitalDatabase = [
	{
		name:'Maa Ganga Memorial Baheti Hospital',
		address:'Akola Naka,  Washim',
		mobileNumber:'072522 32371',
		mapp: `https://www.google.com/maps/dir//baheti+hospital+washim/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bd0e3c19b64f3d7:0xce71dd2bb75c8ac5?sa=X&ved=2ahUKEwidjvq7mPP6AhUFS2wGHYsWAsUQ9Rd6BAhEEAQ`,
		isVerified:true
	},	
	{
		name:'Tikait Hospital',
		address:'Akola Naka,  Washim',
		mobileNumber:'072522 32371',
		map: `https://www.google.com/maps/dir//baheti+hospital+washim/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bd0e3c19b64f3d7:0xce71dd2bb75c8ac5?sa=X&ved=2ahUKEwidjvq7mPP6AhUFS2wGHYsWAsUQ9Rd6BAhEEAQ`,
		isVerified:false,
	},
	{
		name:'Bibekar Hospital',
		address:'Akola Naka,  Washim',
		mobileNumber:'072522 32371',
		map: `https://www.google.com/maps/dir//baheti+hospital+washim/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bd0e3c19b64f3d7:0xce71dd2bb75c8ac5?sa=X&ved=2ahUKEwidjvq7mPP6AhUFS2wGHYsWAsUQ9Rd6BAhEEAQ`,
		isVerified: true,		
	}

];

$.each(hospitalDatabase, function(i){
	let template = `<a href="/${hospitalDatabase[i].name.toLowerCase().replaceAll(' ', '-')}.html" class="list-group-item list-group-item-action" aria-current="true">`;
	template += `<div class="d-flex w-100 justify-content-between">`;
	template += `<h5 class="fs-6 fw-semibold mb-1">${hospitalDatabase[i].name}</h5>`;
	template += `<small>${ hospitalDatabase[i].isVerified ? '<small class="bg-warning px-2 py-1">Verified</small>' : '<small class="bg-danger px-2 py-1 text-light">Not Verified</small>' }</small>`;
	template += `</div>`;
	template += `<p class="m-0"> ${ hospitalDatabase[i].address}</p>`;
	template += `<small class="m-0">And some small print.</small>`;
	template +=	`</a>`
  let hospitals = $('#hospitals');
  hospitals.append(template);
});