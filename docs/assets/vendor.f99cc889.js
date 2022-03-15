var i={exports:{}};(function(t){t.exports={init:()=>`
      (function() {
        function getInitialColorMode() {
                const persistedColorPreference = window.localStorage.getItem('nightwind-mode');
                const hasPersistedPreference = typeof persistedColorPreference === 'string';
                if (hasPersistedPreference) {
                  return persistedColorPreference;
                }
                const mql = window.matchMedia('(prefers-color-scheme: dark)');
                const hasMediaQueryPreference = typeof mql.matches === 'boolean';
                if (hasMediaQueryPreference) {
                  return mql.matches ? 'dark' : 'light';
                }
                return 'light';
        }
        getInitialColorMode() == 'light' ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
      })()
    `,beforeTransition:()=>{const e=document.documentElement,n=()=>{e.classList.remove("nightwind"),e.removeEventListener("transitionend",n)};e.addEventListener("transitionend",n),e.classList.contains("nightwind")||e.classList.add("nightwind")},toggle:()=>{t.exports.beforeTransition(),document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),window.localStorage.setItem("nightwind-mode","light")):(document.documentElement.classList.add("dark"),window.localStorage.setItem("nightwind-mode","dark"))},enable:e=>{const n=e?"dark":"light",o=e?"light":"dark";t.exports.beforeTransition(),document.documentElement.classList.contains(o)&&document.documentElement.classList.remove(o),document.documentElement.classList.add(n),window.localStorage.setItem("nightwind-mode",n)},checkNightMode:()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,watchNightMode:()=>{!window.matchMedia||window.matchMedia("(prefers-color-scheme: dark)").addListener(t.exports.addNightModeSelector())},addNightModeSelector:()=>{t.exports.checkNightMode()?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},addNightTransitions:()=>{document.documentElement.classList.contains("nightwind")||document.documentElement.classList.add("nightwind")},initNightwind:()=>{t.exports.watchNightMode(),t.exports.addNightModeSelector(),t.exports.addNightTransitions()},toggleNightMode:()=>{document.documentElement.classList.contains("dark")?(document.documentElement.classList.remove("dark"),window.localStorage.setItem("nightwind-mode","light")):(document.documentElement.classList.add("dark"),window.localStorage.setItem("nightwind-mode","dark"))}}})(i);var d=i.exports;export{d as n};
