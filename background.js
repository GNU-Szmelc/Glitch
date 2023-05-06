chrome.action.onClicked.addListener(tab => { 
  const {url} = tab;
  console.log(`Loading: ${url}`); 
});
init = (tab) => {
  const {id, url} = tab;
  chrome.scripting.executeScript(
    {
      target: {tabId: id, allFrames: true},
      files: ['clientside.js']
    }
  )
  console.log(`Loading: ${url}`); 
}

chrome.action.onClicked.addListener(tab => { 
  init(tab)
});
