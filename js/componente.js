class Toast{
    static init(){

        if(!document.getElementById('toast-container')){
            const container  = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
        }
    }

    static show({message, type = 'info', duration = 3000}){
        this.init();
        const container = document.getElementById('toast-container');

        //Esto crea el elemento visual.
        const toastEl = document.createElement('div');
        toastEl.classList.add('toast', type);
        toastEl.textContent = message;

        //Cierra al hacer click.
        toastEl.addEventListener('click', () =>{
            toastEl.style.opacity = '0';
            setTimeout(() => toastEl.remove(), 300);
        });

        container.appendChild(toastEl);

        //Se autoelimina con el tiempo.
        setTimeout(() => {
            toastEl.style.opacity = '0';
            setTimeout(() => toastEl.remove() , 300);
        }, duration);
    }
}
