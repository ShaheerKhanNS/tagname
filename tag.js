

const class1 =document.getElementsByClassName("list-group-item");


for(let i=0;i<class1.length;i++){
    class1[i].style.fontWeight="bold";
    class1[i].style.backgroundColor="grey";
};

const tag = document.getElementsByTagName("li");

for(let i=0;i<tag.length;i++){
    tag[i].style.backgroundColor='grey';
    tag[i].style.fontWeight='bold';
}