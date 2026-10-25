(function(){var root=document.getElementById("course-grid");if(!root)return;var xs=[
["大模型原理及应用开发","99","核心课","assets/grade-llm-theory.jpg"],
["机器视觉应用技术实训","99","实践课","assets/grade-machine-vision-practice.png"],
["飞桨深度学习框架及应用实训","98","实践课","assets/grade-paddle-practice.png"],
["新技术应用实践","98","拓展课","assets/grade-new-tech.jpg"],
["机器视觉应用技术","96","核心课","assets/grade-machine-vision.png"],
["大模型应用开发实训","95","实践课","assets/grade-llm-practice.jpg"]
];root.innerHTML=xs.map(function(x){return '<article class="course-card"><img src="'+x[3]+'" alt="'+x[0]+' 成绩截图" data-lightbox="'+x[0]+' · '+x[1]+' 分"><div><small>'+x[2]+'</small><b>'+x[0]+'</b><strong>'+x[1]+'<i> 分</i></strong></div></article>'}).join("");})();
