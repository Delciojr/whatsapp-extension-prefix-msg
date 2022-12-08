const form = document.querySelector("form");
const input = document.getElementById("nome");

const enviareeeee = (nome) =>{
    document.execCommand('insertText', false, `*${nome}:* `);
}


form.addEventListener('submit',async (event)=>{
    alert(config)
    event.preventDefault();
     const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
     chrome.scripting.executeScript({
        target:{tabId:tab.id},
        function:enviareeeee,
        args: [input.value]
     })
})

