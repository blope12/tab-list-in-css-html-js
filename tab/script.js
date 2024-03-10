function tab1btn() {
    const tab1 = document.querySelector('.tab-1');
    const tab2 = document.querySelector('.tab-2');
    const tab3 = document.querySelector('.tab-3');


    tab1.classList.add('active');
    tab2.classList.remove('active');
    tab3.classList.remove('active');

  }


  function tab2btn() {
    const tab1 = document.querySelector('.tab-1');
    const tab2 = document.querySelector('.tab-2');
    const tab3 = document.querySelector('.tab-3');
    
    
    tab1.classList.remove('active');
    tab2.classList.add('active');
    tab3.classList.remove('active');
  }


  function tab3btn() {
    const tab1 = document.querySelector('.tab-1');
    const tab2 = document.querySelector('.tab-2');
    const tab3 = document.querySelector('.tab-3');

    tab1.classList.remove('active');
    tab2.classList.remove('active');
    tab3.classList.add('active');  
}

