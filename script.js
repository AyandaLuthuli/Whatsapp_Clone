// script.js

const chatItems = document.querySelectorAll(".chat-item");
const chatArea = document.querySelector(".chat-area");

// Example chat data (could come from Firebase later)
const chats = {
  devQueen: {
    name: "Dev Queen 👑💻",
    avatar: "devQueenIcon.png",
    messages: [
      { from: "received", text: "Hello there , how are you doing?" },
      { from: "sent", text: "I'm doing great, thank you! How about you?" },
      { from: "received", text: "hows the project going?🧑🏻‍🦱" },
      {
        from: "sent",
        text: "i sent a pull request to the project , i hope it gets merges",
      },
      { from: "sent", text: "check it out" },
      { from: "received", text: "Alright , um on it fam" },
      { from: "received", text: "This is a joke right ?" },
      { from: "sent", text: "no its not a joke , i'm serious,Whats wrong ?" },
      { from: "sent", text: "Wasup?" },
      { from: "received", text: "you messed it up again !!!" },
      { from: "sent", text: "how?" },
      { from: "received", text: "Same as the last time Ayanda" },
      { from: "sent", text: "Give me 30min i will fix it,plz" },
      {
        from: "received",
        text: "You are a disgrace to the coding community!!",
      },
    ],
  },
  junior: {
    name: "Junior Norman 🧑🏾‍🦱",
    avatar: "juniorProf.png",
    messages: [
      {
        from: "sent",
        text: "Hey, I've been thinking about that new project we need to start",
      },
      {
        from: "received",
        text: "After that last PR disaster? You sure you want to start something new?",
      },
      {
        from: "sent",
        text: "Come on, that was just a small mistake. This new idea is really promising!",
      },
      {
        from: "received",
        text: "Alright, I'm listening... what's the project about?",
      },
      {
        from: "sent",
        text: "It's an AI-powered code reviewer that catches mistakes before they get committed",
      },
      {
        from: "received",
        text: "...you mean like the mistakes YOU keep making?",
      },
      {
        from: "sent",
        text: "Exactly! I have firsthand experience with what NOT to do 😅",
      },
      {
        from: "received",
        text: "Okay, that's actually not a bad idea. When do you want to start?",
      },
      {
        from: "sent",
        text: "How about tomorrow? I'll create the repo and draft some basic requirements",
      },
      {
        from: "received",
        text: "Just promise me you won't push to main directly this time",
      },
      { from: "sent", text: "Scout's honor! Branches and PRs only 🙌" },
      {
        from: "sent",
        text: "I already set up a basic repo, added you as a collaborator. Check your email!",
      },
      {
        from: "received",
        text: "Wait… you actually prepared something in advance? Who are you and what have you done with Ayanda?",
      },
      {
        from: "sent",
        text: "😂😂😂 I’m evolving, okay? Learned from my mistakes (mostly)",
      },
      {
        from: "received",
        text: 'Alright, alright. I’ll check it out. But if I see a single `console.log("test")` left in production code, I’m revoking your access.',
      },
      {
        from: "sent",
        text: "No no, I swear I cleaned it up this time. Even added JSDoc comments!",
      },
      { from: "received", text: "…JSDoc? Did ChatGPT write this for you?" },
      {
        from: "sent",
        text: "Okay FINE, it helped a little. But the logic is mine! Mostly.",
      },
      {
        from: "received",
        text: "*sigh* I’ll review it tomorrow. But we need a real plan—tech stack, milestones, deadlines. No cowboy coding.",
      },
      {
        from: "sent",
        text: "Deal. How about we meet tomorrow at 10 AM? Coffee on me ☕",
      },
      {
        from: "received",
        text: "You’re buying? Now I KNOW something’s off. Did you break something else?",
      },
      {
        from: "sent",
        text: "No! 😤 Just trying to be professional. But if you’d rather I stay reckless…",
      },
      {
        from: "received",
        text: "10 AM. And I’m ordering the expensive latte.",
      },
      {
        from: "sent",
        text: "Done. Also… I may have already started a Figma wireframe. Thoughts?",
      },
      { from: "received", text: "Who hurt you? Since when do you do UX?" },
      {
        from: "sent",
        text: "YouTube tutorials go hard these days. But seriously, I’m committed to this one.",
      },
      {
        from: "received",
        text: "…I’m kinda proud? And concerned. But mostly proud. Tomorrow, 10 AM. Don’t ghost.",
      },
      {
        from: "sent",
        text: "Wouldn’t dream of it. This project’s gonna be *chef’s kiss* 🤌",
      },
    ],
  },
  kv2: {
    name: "Kv2 😆😆",
    avatar: "kv2Pro.png",
    messages: [
      {
        from: "sent",
        text: "Yo Kv2! Did you see the memes I sent earlier? 😂",
      },
      {
        from: "received",
        text: "Bro, those memes had me rolling! Got any more?",
      },
      {
        from: "sent",
        text: "Always! Wait till you see the next batch. Also, are you joining the call tonight?",
      },
      {
        from: "received",
        text: "For sure! Wouldn't miss it. Who else is coming?",
      },
      {
        from: "sent",
        text: "I think Chris and Juniour are in. Should be fun!",
      },
      { from: "received", text: "Bet! See you there, meme lord 😆" },
    ],
  },
  chris: {
    name: "Chris 🏴‍☠️",
    avatar: "ChrisPro.png",
    messages: [
      { from: "sent", text: "Hey Chris! How's the project coming along?" },
      {
        from: "received",
        text: "It's going well, thanks! Just need to add the edit booking feature.",
      },
      {
        from: "sent",
        text: "That's great! I'll start working on it tomorrow. Any specific requirements?",
      },
      {
        from: "received",
        text: "Just need to edit bookings after they're made. Too many scallywags typin' wrong dates!",
      },
      {
        from: "sent",
        text: "Gotcha. I'll build it. How much are you willing to pay?",
      },
      {
        from: "received",
        text: "I was thinking R3,000. But if you can do it for less, I'd appreciate it!",
      },
      {
        from: "sent",
        text: "No problem! I'll get it done. When do you need it by?",
      },
      {
        from: "received",
        text: "2 weeks time - before the school holidays start!",
      },
      {
        from: "sent",
        text: "Shiver me timbers! That's tight! But aye, I'll make it work. Sending contract now.",
      },
      {
        from: "received",
        text: "Perfect! And remember - no cursed code this time! Last time me parrot learned bad words from yer error messages!",
      },
      {
        from: "sent",
        text: "😂 Aye aye Captain! Clean code only. I'll start work tomorrow at dawn!",
      },
    ],
  },
  josh_manager: {
    name: "Josh_Manager🧔‍♂️",
    avatar: "JoshProf.jpg",
    messages: [
      {
        from: "sent",
        text: "Hey, I've been thinking about that new project we need to start",
      },
      {
        from: "received",
        text: "After that last PR disaster? You sure you want to start something new?",
      },
      {
        from: "sent",
        text: "Come on, that was just a small mistake. This new idea is really promising!",
      },
      {
        from: "received",
        text: "Alright, I'm listening... what's the project about?",
      },
      {
        from: "sent",
        text: "It's an AI-powered code reviewer that catches mistakes before they get committed",
      },
      {
        from: "received",
        text: "...you mean like the mistakes YOU keep making?",
      },
      {
        from: "sent",
        text: "Exactly! I have firsthand experience with what NOT to do 😅",
      },
      {
        from: "received",
        text: "Okay, that's actually not a bad idea. When do you want to start?",
      },
      {
        from: "sent",
        text: "How about tomorrow? I'll create the repo and draft some basic requirements",
      },
      {
        from: "received",
        text: "Just promise me you won't push to main directly this time",
      },
      { from: "sent", text: "Scout's honor! Branches and PRs only 🙌" },
      {
        from: "sent",
        text: "I already set up a basic repo, added you as a collaborator. Check your email!",
      },
      {
        from: "received",
        text: "Wait… you actually prepared something in advance? Who are you and what have you done with Ayanda?",
      },
      {
        from: "sent",
        text: "😂😂😂 I’m evolving, okay? Learned from my mistakes (mostly)",
      },
      {
        from: "received",
        text: 'Alright, alright. I’ll check it out. But if I see a single `console.log("test")` left in production code, I’m revoking your access.',
      },
      {
        from: "sent",
        text: "No no, I swear I cleaned it up this time. Even added JSDoc comments!",
      },
      { from: "received", text: "…JSDoc? Did ChatGPT write this for you?" },
      {
        from: "sent",
        text: "Okay FINE, it helped a little. But the logic is mine! Mostly.",
      },
      {
        from: "received",
        text: "*sigh* I’ll review it tomorrow. But we need a real plan—tech stack, milestones, deadlines. No cowboy coding.",
      },
      {
        from: "sent",
        text: "Deal. How about we meet tomorrow at 10 AM? Coffee on me ☕",
      },
      {
        from: "received",
        text: "You’re buying? Now I KNOW something’s off. Did you break something else?",
      },
      {
        from: "sent",
        text: "No! 😤 Just trying to be professional. But if you’d rather I stay reckless…",
      },
      {
        from: "received",
        text: "10 AM. And I’m ordering the expensive latte.",
      },
      {
        from: "sent",
        text: "Done. Also… I may have already started a Figma wireframe. Thoughts?",
      },
      { from: "received", text: "Who hurt you? Since when do you do UX?" },
      {
        from: "sent",
        text: "YouTube tutorials go hard these days. But seriously, I’m committed to this one.",
      },
      {
        from: "received",
        text: "…I’m kinda proud? And concerned. But mostly proud. Tomorrow, 10 AM. Don’t ghost.",
      },
      {
        from: "sent",
        text: "Wouldn’t dream of it. This project’s gonna be *chef’s kiss* 🤌",
      },
    ],
  },
  Girlfriend: {
    name: "My Girlfriend👩‍❤️‍👨",
    avatar: "girlfriend.JPG",
    messages: [
      {
        from: "sent",
        text: "Hey love ❤️ Just saw your favorite coffee place and thought of you. Did you eat today?",
      },
      {
        from: "received",
        text: "Aww 🥺 I had lunch, unlike someone who lives on iced coffee and chaos!",
      },
      {
        from: "sent",
        text: "Remember our first date? When you tried to be smooth but spilled your drink? Still the cutest thing I've seen",
      },
      {
        from: "received",
        text: "OMG you remember that?? 😳 I was so embarrassed but you just laughed and helped me clean up",
      },
      {
        from: "sent",
        text: "That's when I knew you were special. You turn even awkward moments into something beautiful",
      },
      {
        from: "received",
        text: "*crying* Now I miss you extra 😭 When can I steal you away for a date?",
      },
      {
        from: "sent",
        text: "How about Saturday? We can go back to that same place - I promise not to laugh this time (no promises)",
      },
      {
        from: "received",
        text: "Deal! But only if you let me pay this time (no bathroom escape tricks!)",
      },
      {
        from: "sent",
        text: "You know me too well 😂 Fine, but I get to choose dessert after",
      },
      {
        from: "received",
        text: "As if I'd say no to dessert with you ❤️ Counting down the days!",
      },
      {
        from: "sent",
        text: "Me too, beautiful. Now drink some water (I know you haven't had any today!)",
      },
      {
        from: "received",
        text: "Ugh fine! Only because you care. Love you to the moon and back 🌙",
      },
    ],
  },
};

chatItems.forEach((item) => {
  item.addEventListener("click", () => {
    const chatId = item.getAttribute("data-chat");
    const chat = chats[chatId];
    if (!chat) return;

    // Replace chat area content
    chatArea.innerHTML = `
      <div class="chat-header">
        <div class="chat-avatar">
          <img src="images/${chat.avatar}" alt="${
      chat.name
    }" width="40px" height="40px" />
        </div>
        <div class="chat-info">
          <div class="chat-name">${chat.name}</div>
          <div class="chat-status">last seen recently</div>
        </div>
        <div class="chat-header-icons">
          <span class="icon video"><img src="images/vidcall.jpg" width="20" /></span>
          <span class="icon call"><img src="images/phonecall.webp" width="20" /></span>
          <span class="icon search"><img src="images/search.png" width="20" /></span>
        </div>
      </div>
      <div class="messages">
        ${chat.messages
          .map(
            (msg) => `
          <div class="message ${msg.from}">
            <div class="message-text">${msg.text}</div>
            <div class="message-time">${new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}</div>
          </div>
        `
          )
          .join("")}
      </div>
      <div class="chat-input">
        <input type="text" placeholder="Type a message" />
        <button class="send-btn">Send</button>
      </div>
    `;
  });
});

// Dark/Light mode toggle logic
const themeToggle = document.getElementById("themeToggle");
const toggleCheckbox = document.getElementById("toggleCheckbox");

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  if (toggleCheckbox) toggleCheckbox.checked = true;
}

if (themeToggle && toggleCheckbox) {
  toggleCheckbox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
}
