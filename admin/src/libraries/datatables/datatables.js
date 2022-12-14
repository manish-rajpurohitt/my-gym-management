export function LoadJS () {
    //An array of assets
    let scripts = [
        
      { src: "https://code.jquery.com/jquery-2.2.4.min.js" },
        { src: "https://cdn.datatables.net/v/dt/b-1.6.5/b-flash-1.6.5/b-html5-1.6.5/datatables.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js" },
        { src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js" },
        { src: "https://cdn.datatables.net/v/dt/dt-1.10.23/b-1.6.5/b-colvis-1.6.5/b-html5-1.6.5/datatables.min.js" },
        { src: "https://cdn.datatables.net/v/dt/jszip-2.5.0/dt-1.10.23/b-1.6.5/b-html5-1.6.5/b-print-1.6.5/datatables.min.js" },
      { src: "https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js" },
      { src: "assets/picker.min.js" },
      { src: "assets/js/init.js" }


    ]
    //Append the script element on each iteration
    
       
        for (let i = 0; i < scripts.length; i++) {
          const node = document.createElement('script');
          node.src = scripts[i].src;
          node.type = 'text/javascript';
          node.async = false;
          node.charset = 'utf-8';
          document.getElementById('root').appendChild(node);
        }   
  
    
  }