var katana = {
	extend: function(e,o){
		/*el if sin corchetes anda para dos lineas identada */
		if(typeof e =="string")
			return document.getElementById(e);
		/* de esta manera estamos haciendo que todos los elmts tengan los metodos de mas abajo*/
		for (var name in o ) {
			e[name] = o[name];
		}
		return e;
	},
	obt: function(e){
		if(typeof e =="string"){
			return katana.extend(document.getElementById(e), katana);
		}else{
			return katana.extend(e, katana);
		}

	},
	esc: function(txt){
		return this.innerHTML = txt;
	},
	// crear: function(e,id){
	// 	if (id != undefined) {
	// 		var ele = katana.extend(document.createElement(e),katana);
	// 		ele.id = id;
	// 		return ele;
	// 	}else{
	// 		return katana.extend(document.createElement(e),katana);
	// 	}
	// }
	crear: function(e,opc){
		if (opc != undefined){
			var ele = katana.extend(document.createElement(e),katana);
			for(var i in opc){
				ele.setAttribute(i,opc[i]);
			}
			// ele.id = id;
			return ele;
		}else{
			return katana.extend(document.createElement(e),katana);
		}
	},
	metele: function (e){
		return this.appendChild(e);
	},
	obliga: function(opc){
		this.onblur = function(){// el onblur es cuando sale el foco del elemento
			for (var i in opc) {
				switch(i){
					case "vacio":
						if (this.value =="" | this.value ==undefined) {
							alert("Esta Vacio");							
							//this.focus();
						};	
					break;
					case "correo":
						//validar correo	
					break;
					case "letra":
						var pattern =/([0-9])/;    /* dentro de las // se pone el patron a buscar */ 
						if (this.value.match(pattern)) {
							alert("Escribiste algun digito");
						};
					break;
					case "max":
						var c = this.value;
						if (c.length > opc[i]) {
							alert("Te pasaste de cant de caracteres")
						};	
					break;
					default:
					break;
				}

			}
			
		}
	},
	css: function(opc){
		for(var name in opc){
			//this.style.name = opc[name]
			eval("this.style."+name+"= opc[name]");
		}
	}
}

window.$ = katana;