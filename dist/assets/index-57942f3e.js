import{io as y}from"https://cdn.socket.io/4.4.1/socket.io.esm.min.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function h(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=h(t);fetch(t.href,o)}})();let n=document.getElementById("input1"),p=document.getElementById("input2"),r=document.getElementById("ChatArea"),l="white",s="#333333",a="";document.body.scrollLeft=document.body.scrollWidth;const c=y("https://chat-app-server-euw8.onrender.com");function g(e){a=e,c.emit("JoinRoom",a,i=>{u(i)})}function u(e){if(e==""){if(n.value=="")return;r.innerHTML+=`<p style = 'background-color: ${s}; color: ${l};'>`+n.value+"</p>",r.scrollTop=r.scrollHeight,m(),n.value=""}else r.innerHTML+=`<p style = 'background-color: ${s}; color: ${l};'>`+e+"</p>",r.scrollTop=r.scrollHeight,m()}function v(){l=l=="white"?"black":"white"}function L(){s=s=="#989898"?"#333333":"#989898"}function m(){v(),L()}function C(){c.emit("SendMessage",n.value,a),u("")}n.addEventListener("keypress",e=>{console.log(e.key),e.key=="Enter"&&(e.preventDefault(),C())});p.addEventListener("keypress",e=>{console.log(e.key),e.key=="Enter"&&(e.preventDefault(),g(p.value))});c.on("connect",()=>{n.value=`You have connected with id: ${c.id}`,u("")});c.on("RecieveMessage",e=>{u(e)});
