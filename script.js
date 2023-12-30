let input = document.querySelector('#myInput');
        let add = document.querySelector('.addBtn');
        let ul = document.querySelector('#myUL');
        // let storage = '';

          input.addEventListener('keyup', function(e){
            if(e.key == 'Enter'){
              liMaker(this.value)
              this.value = '';
            }
          })

            add.addEventListener('click', () => {
                if(input.value == ""){
                    alert('Write a task first')
                }else{
                liMaker(input.value)
                input.value = ''; 
         }
    })

    const liMaker = (value) => {
            let li = document.createElement('li');
            li.innerHTML = `${value}<i></i>`;
            ul.appendChild(li);
            
            done(li);
            dismiss(li);
          }

          const dismiss= (list) => {
            list.querySelector('i').addEventListener('click', close = () =>{
             list.remove()
            
            })
          }

          const done = (list) => {
            list.addEventListener('click', ()=>{
                list.classList.toggle('checked')
            })
          }
