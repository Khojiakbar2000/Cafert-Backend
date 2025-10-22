console.log("Products frontend javascript file");

$(function(){
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();
    if(selectedValue === "DRINK"){
        $("#product-collection").hide();
        $("#product-volume").show();
        
    }else{
        $("#product-volume").hide();
        $("#product-collection").show();

    }
  })
  $("#process-btn").on("click", ()=>{
    $(".new-product-form").slideToggle(500);
    $("#process-btn").css("display", "none");
});

$("#cancel-btn").on("click", ()=>{
    $(".new-product-form").slideToggle(100);
    $("#process-btn").css("display", "flex");
});



$(".status-select").on("change", async function(e){

    const id = e.target.id,
    productStatus = e.target.value;


    
     try {
     const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus});
     console.log("response:", response)
     const result = response.data;
     if(result.data){
        $(".new-product-status").blur();
     } else alert("Product update failed!");
     }catch(err){
        console.log(err);
        alert("Product update failed!");
     }
});

});
function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productDesc = $(".product-desc").val();
    productStatus = $(this).val();

 
    if(
        productName === "" ||
        productPrice === "" ||
        productLeftCount === "" ||
        productCollection === "" ||
        productDesc === "" ||
        productStatus === "" 


    ) {
     alert("Please insert all required details!");
        return false;
    } else return true;
}

/*function previewFileHandler(input, order){

const imgClassName = input.className;
console.log("input:", input);

//const file = $(`.${imgClassName}`).get(0).files[0];
const file = input.files[0];
const fileType = file['type'];
const validImageType = ["image/jpg", "image/jpeg", "image/png"];

if(!validImageType.includes(fileType)){
    alert("Please insert only jpeg, jpg and png")
    }else{
        if(file){
            const reader = new FileReader();
            reader.onload = function() {
                $(`#image-section-${order}`).attr("src", reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
}*/



function previewFileHandler(input, order) {
    const file = input.files[0];
    if (!file) return;
  
    const fileType = file.type;
    const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
  
    if (!validImageTypes.includes(fileType)) {
      alert("Please insert only jpeg, jpg or png images.");
      input.value = "";
      return;
    }
  
    const reader = new FileReader();
    reader.onload = function () {
      const previewImage = document.getElementById(`image-preview-${order}`);
      if (previewImage) {
        previewImage.src = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }
  


/*console.log("Products frontend javascript file");

$(function(){
  // Change event for product type selection with clearer container IDs
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();
    if(selectedValue === "DRINK"){
        $("#dish-size-container").hide();    // renamed container for dish size
        $("#drink-volume-container").show(); // renamed container for drink volume
    } else {
        $("#drink-volume-container").hide();
        $("#dish-size-container").show();
    }
  });

  // Show new product form and hide button
  $("#process-btn").on("click", ()=>{
      $(".dish-container").slideToggle(500);
      $("#process-btn").hide(); // use .hide() instead of css display for clarity
  });

  // Hide new product form and show button
  $("#cancel-btn").on("click", ()=>{
      $(".dish-container").slideToggle(100);
      $("#process-btn").show();
  });

  // Use delegated event binding for dynamically loaded .new-product-status elements
  $(document).on("change", ".new-product-status", async function(e){
      const id = e.target.id;
      const productStatus = $(`#${id}.new-product-status`).val();

      try {
        const response = await axios.post(`/admin/product/${id}`, {productStatus: productStatus});
        console.log("response:", response);
        const result = response.data;
        if(result.data){
            $(this).blur(); // blur the changed select only
        } else {
            alert("Product update failed!");
        }
      } catch(err){
        console.log(err);
        alert("Product update failed!");
      }
  });
});

// Form validation function (no changes needed here)
function validateForm() {
    const productName = $(".product-name").val();
    const productPrice = $(".product-price").val();
    const productLeftCount = $(".product-left-count").val();
    const productCollection = $(".product-collection").val();
    const productDesc = $(".product-desc").val();
    const productStatus = $(".product-status").val();

    if(
        productName === "" ||
        productPrice === "" ||
        productLeftCount === "" ||
        productCollection === "" ||
        productDesc === "" ||
        productStatus === ""
    ) {
        alert("Please insert all required details!");
        return false;
    } else return true;
}

// Preview handler - use input.files directly, avoid className issues
function previewFileHandler(input, order){
    console.log("input:", input);

    const file = input.files[0]; // Use input.files directly
    if (!file) return;

    const fileType = file.type;
    const validImageType = ["image/jpg", "image/jpeg", "image/png"];

    if(!validImageType.includes(fileType)){
        alert("Please insert only jpeg, jpg and png");
    } else {
        const reader = new FileReader();
        reader.onload = function() {
            $(`#image-section-${order}`).attr("src", reader.result);
        };
        reader.readAsDataURL(file);
    }
}*/


