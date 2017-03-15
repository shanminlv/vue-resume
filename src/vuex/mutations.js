export default {
	isShow (state, payload) {
		state.isShow=payload;
	},
	editShow (state, payload) {
		state.editShow=payload;
	},
	iconPosition(state,obj){
		state.iconPosition=obj;
	},
	iconHide(state,bool){
		state.iconPosition.show=bool;
	},
	imgData(state,val){
		let obj=state.iconPosition.item;
		if(obj instanceof Array){
			obj.splice(state.iconPosition.index,1,val);
		}else{
			obj[state.iconPosition.index]=val
		}
	},
	changeData(state,target){
		let obj=target.item;
		if(obj instanceof Array){
			obj.splice(target.index,1,target.value);
		}else{
			obj[target.index]=target.value
		}
	},
	addButton(state,bool){
		state.addButton=bool;
	},
	isHided(state,bool){
		state.isHided=bool;
	},
	changeModule(state,item){
		if(typeof item=="string"){
			state.resumeModule=item;
			return;
		};
		state[item.resumeModule]=item;
		state.resumeModule=item.resumeModule;
	},
	operate(state,bool){
		state.operate=bool;
	},
	layer(state,obj){
		if(typeof obj == 'object'){
			state.layer=obj
		}else{
			state.layer.show=obj;
		}
	},
	storage(state,arr){
		arr.forEach(function(val){
			let strArr=val.key.split('.');
			if(strArr.length!=2)return;
			state.storage[strArr[0]][strArr[1]]=val.value;
		})
	},
	wrapperShow(state,bool){
		state.wrapperShow=bool;
	},
	changeState(state,val){
		let strArr=val.key.split('.');
		let obj=state;
		strArr.forEach(function(value){
			if(typeof obj[value]!='object'){
				obj[value]=val.value;
				return
			}
			obj=obj[value];
		})
		
	}
}