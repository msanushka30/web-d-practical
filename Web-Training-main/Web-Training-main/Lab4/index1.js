document.getElementById(form).addEventListener('Submit', function(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let dept=document.getElementById('department').value;
    let id=document.getElementById('id').value;
    let photo=document.getElementById('image');

    const reader=new FileReader();
    reader.onload=function(e){
        document.getElementById('cardPhoto').src = e.target.result;
        document.getElementById('cardName').textContent = name;
        document.getElementById('carddept').textContent = dept;
        document.getElementById('cardID').textContent = id;
        document.getElementById('id-card').style.display = 'block';
    };
    reader.readAsDataURL(photoInput.files[0]);
})