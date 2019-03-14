 <template>

<div class="hover03 column">
  
  <div>
     <figure><img src="https://picsum.photos/300/200?image=244" /></figure>
    <span>捐赠</span>
  <a target="_blank" class="blue title-link">食品安全 &amp; 环境保护</a>
    <p class="project-partner">Subscribe to our newsletter for updates
    Subscribe to our newsletter for updates
  
</p>
    </div>
  <div>
    <figure><img src="https://picsum.photos/300/200?image=1024" /></figure>
    <span>捐赠</span>
     <a target="_blank" class="blue title-link">food security &amp; environment</a>
    <p class="project-partner">Subscribe to our newsletter for updates
    Subscribe to our newsletter for updates
  
</p>
  </div>
  <div>
    <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
    <span>捐赠</span>
     <a target="_blank" class="blue title-link">food security &amp; environment</a>
    <p class="project-partner">Subscribe to our newsletter for updates
    Subscribe to our newsletter for updates
  
</p>
  </div>
</div>
</template>

<script>
    export default {
      data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
      
        },
        props: ['alertText'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style >
body {
  color: #333;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
.column {
	margin: 15px 15px 0;
	padding: 0;
}
.column:last-child {
  padding-bottom: 60px;
}
.column::after {
  content: '';
  clear: both;
  display: block;
}
.column div {
  position: relative;
  float: left;
  width: 300px;
  height: 200px;
  margin: 0 0 75px 25px;
  padding: 0;
}
.column div:first-child {
	margin-left: 0;
}
.column p  {
  margin-top: 10px;
}
.column a  {
  margin-top: 4px;

}
.column div span {
	position: absolute;
	bottom: -20px;
	left: 0;
	z-index: -1;
	display: block;
	width: 300px;
	margin: 0px;
	padding: 0;
	color: #444;
	font-size: 18px;
	text-decoration: none;
	text-align: center;
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
	opacity: 0;
}



figure {
  width: 300px;
  height: 200px;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
}
figure:hover+span {
  bottom: -36px;
  opacity: 1;
}
.hover03 figure img {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}
.hover03 figure:hover img {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.title-link {
  display: inline-block;
  -webkit-transition: color 500ms ease;
  transition: color 500ms ease;
  font-family: Avenir, 'Helvetica neu', sans-serif;
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-decoration: none;
  text-transform: uppercase;
}

.title-link:hover {
  text-decoration: underline;
}

.title-link.blue {
  display: block;
  font-family: 'Helvetica neu', sans-serif;
  color: #45abb9;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.5px;
}


.project-partner {
  display: block;
  font-family: Helveticaneue, sans-serif;
  color: #707070;
  font-weight: 300;
}
 
</style>
