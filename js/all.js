const App={
    data:function(){
        return{
            height:"",
            weight:"",
            BMI:"",
            year : "",
            month : "",
            day : "",
            temp:[],
        }
    },
    methods:{
        calculate(){
            // this.BMI=Math.round(this.weight/((this.height)*(this.height)/10000));
            const BMI = parseInt(this.weight/((this.height)*(this.height)/10000));
            this.BMI=Math.round(BMI);
            this.temp.push({
                    height:this.height,
                    weight:this.weight,
                    BMI:this.BMI,
                    year:this.year,
                    month:this.month,
                    day:this.day
                });
        },
        clear(){
            this.temp.splice(0);
        },
    },
    created(){
         this.year = new Date().getFullYear();
         this.month = new Date().getMonth()+1;
         this.day = new Date().getDate();
    },
}
Vue.createApp(App).mount('#app');
