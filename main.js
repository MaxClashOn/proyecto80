var contador=0;
		var totalinvitados=0;
		function agregar() {
			var inv=document.getElementById('ingreso'); 

			if (inv.value=="") return;

			var nuevo = document.createElement("div"); 
			nuevo.setAttribute("id", "invdiv"+contador); 
			nuevo.style.fontFamily='sans-serif';
			nuevo.style.fontSize=22;
			nuevo.style.backgroundColor='yellow';
						

			var txtnuevo= document.createTextNode( inv.value + ' '); 
			nuevo.appendChild(txtnuevo); 

			
			var borrarnuevo = document.createElement("a"); 
			borrarnuevo.setAttribute("href", "#"); 
			borrarnuevo.setAttribute("onClick", "borrar("+ contador +")"); 
			borrarnuevo.style.fontFamily='sans-serif';
			borrarnuevo.style.fontSize=15;	
			borrarnuevo.style.fontStyle='italic';						

			var txtborrarnuevo= document.createTextNode( "borrar" ); 
			borrarnuevo.appendChild(txtborrarnuevo); 

			nuevo.appendChild(borrarnuevo); 
			// ----------------

			var caja=document.getElementById('lista'); 
			caja.appendChild(nuevo); 
			
			var nuevoinput=document.createElement("input"); 
			nuevoinput.setAttribute("type","hidden"); 
			nuevoinput.setAttribute("name","inv[]");
			nuevoinput.setAttribute("value",inv.value);
			nuevoinput.setAttribute("id","invinput"+contador);

			var formoculto=document.getElementById('formoculto'); 
			formoculto.appendChild(nuevoinput); 

			
			contador++;
			totalinvitados++;			

			inv.value=""; 
			inv.focus();
		}

		function borrar(id) {
			
			
			var divborrar = document.getElementById('invdiv'+id);
			var padre = divborrar.parentNode;
			padre.removeChild(divborrar);
			
			
			var inputborrar = document.getElementById('invinput'+id);
			var padre = inputborrar.parentNode;
			padre.removeChild(inputborrar);
			
			totalinvitados--;
		}
		
		function validar(){
			if (totalinvitados == 0){
				alert("Debe haber alguna persona invitada");
				return false;
			}
			return true;
		}