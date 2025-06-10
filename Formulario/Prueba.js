 const Next1 = () =>{
      const Parte2Formulario = document.getElementById('Parte2-Formulario');
      const Parte1Formulario = document.getElementById('Parte-Formulario');
      Parte1Formulario.classList.replace('d-flex','d-none');
      Parte2Formulario.classList.replace('d-none','d-flex');
      const BCarga1 = document.getElementById('BCarga1');
      BCarga1.style.animation = 'AniCarga1_2 1s';
      const BCarga2 = document.getElementById('BCarga2');
      BCarga2.style.animation = 'AniCarga2 1s'

  };

  const Back1 = () =>{
      const Parte2Formulario = document.getElementById('Parte2-Formulario');
      const Parte1Formulario = document.getElementById('Parte-Formulario');
      Parte1Formulario.classList.replace('d-none','d-flex');
      Parte2Formulario.classList.replace('d-flex','d-none');
      const BCarga1 = document.getElementById('BCarga1');
      BCarga1.style.animation = 'AniCarga1_1 1s'
  }

  const Next2 = () => {
      const Parte3Formulario = document.getElementById('Parte3-Formulario');
      const Parte2Formulario = document.getElementById('Parte2-Formulario');
      Parte2Formulario.classList.replace('d-flex','d-none');
      Parte3Formulario.classList.replace('d-none','d-flex');
  };

  const Back2 = () => {
      const Parte3Formulario = document.getElementById('Parte3-Formulario');
      const Parte2Formulario = document.getElementById('Parte2-Formulario');
      Parte2Formulario.classList.replace('d-none','d-flex');
      Parte3Formulario.classList.replace('d-flex','d-none');
      const BCarga2 = document.getElementById('BCarga2');
      BCarga2.style.animation = 'AniCarga3_2 1s';

  }