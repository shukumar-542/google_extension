// const colorBtn = document.querySelector('.colorChangeBtn');

// colorBtn.addEventListener('click',async()=>{
//     const [tab] = await chrome.tabs.query({active :  true, currentWindow : true});
//     chrome.scripting.executeScript({
//         target : {
//             tabId : tab.id
//         },
//         function : pickColor

//     })
// })
//  function pickColor() {
   
  
//         const eyeDropper = new EyeDropper();
//         const selectColor =  eyeDropper.open()
//         console.log(selectColor);
  
    
// }

// async function pickColor() {
//     try {
       
//         const eyeDropper = new EyeDropper();
//         const selectColor =  await eyeDropper.open();
//         console.log(selectColor);
//     } catch (err) {
//         console.error(err);
//     }
// }

// const btn = document.querySelector('.changeColorBtn');
// const colorGrid = document.querySelector('.colorGrid');
// const colorValue = document.querySelector('.colorValue');

// btn.addEventListener('click', async () => {
    // chrome.storage.sync.get('color', ({ color }) => {
    //     console.log('color: ', color);
    // });
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript(
//         {
//             target: { tabId: tab.id },
//             function: pickColor,
//         },
//         async (injectionResults) => {
//             const [data] = injectionResults;
//             if (data.result) {
//                 const color = data.result.sRGBHex;
//                 colorGrid.style.backgroundColor = color;
//                 colorValue.innerText = color;
//                 try {
//                     await navigator.clipboard.writeText(color);
//                 } catch (err) {
//                     console.error(err);
//                 }
//             }
//         }
//     );
// });

// async function pickColor() {
//     try {
//         const eyeDropper = new EyeDropper();
//         return await eyeDropper.open();
//     } catch (err) {
//         console.error(err);
//     }
// }

const saveBtn =  document.getElementById('save-data');
const getData = document.getElementById('get-save-data');


document.getElementById('save-data').addEventListener('click', function(){
    const title = document.getElementById('title').value;

    chrome.storage.sync.set({'title' : title}, function(){
        alert('success')
    })
})

document.getElementById('get-save-data').addEventListener('click', function(){
    chrome.storage.sync.get('title', function (data){
        alert(data.title)
    })
})