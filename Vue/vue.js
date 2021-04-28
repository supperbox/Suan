const one = Vue.createApp({
    data() {
        return {
            name: 'jlw',
            age: '20'
        }
    },
    methods: {
        clicks() {
            alert('点击了一下')
            console.log('11111111')
        }
    },
    created() {
        console.log('111')
    }
})

one.component('coco', {
    template: `
    <div style="width: 50px;height: 50px;background-color:papayawhip;" @click = 'en'>
     just do it.{{name}}
</div>   `,
    props: {name:'1'},
    data(){
      return{
          name: this.props.name
      }
    },
    methods: {
        en(){
            alert('点击')
        }
    }
})
one.mount('#app')
// one.mount('#b')


