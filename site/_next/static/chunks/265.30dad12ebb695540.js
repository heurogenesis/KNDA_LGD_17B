"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{729:(e,t,r)=>{r.d(t,{F:()=>l,o:()=>i});var s=r(7923);class i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let a=new s.qUd(-1,1,1,-1,0,1);class n extends s.LoY{constructor(){super(),this.setAttribute("position",new s.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new s.qtW([0,2,0,0,2,0],2))}}let o=new n;class l{constructor(e){this._mesh=new s.eaF(o,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},1202:(e,t,r)=>{r.d(t,{Y:()=>a});var s=r(7923);class i extends s.BRH{constructor(e){super(e),this.type=s.ix0}parse(e){let t,r,i,a=function(e,t){switch(e){case 1:throw Error("THREE.HDRLoader: Read Error: "+(t||""));case 2:throw Error("THREE.HDRLoader: Write Error: "+(t||""));case 3:throw Error("THREE.HDRLoader: Bad File Format: "+(t||""));default:throw Error("THREE.HDRLoader: Memory Error: "+(t||""))}},n=function(e,t,r){t=t||1024;let s=e.pos,i=-1,a=0,n="",o=String.fromCharCode.apply(null,new Uint16Array(e.subarray(s,s+128)));for(;0>(i=o.indexOf("\n"))&&a<t&&s<e.byteLength;)n+=o,a+=o.length,s+=128,o+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(s,s+128)));return -1<i&&(!1!==r&&(e.pos+=a+i+1),n+o.slice(0,i))},o=new Uint8Array(e);o.pos=0;let l=function(e){let t,r,s=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,l=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,h={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};for(!(e.pos>=e.byteLength)&&(t=n(e))||a(1,"no header found"),(r=t.match(/^#\?(\S+)/))||a(3,"bad initial token"),h.valid|=1,h.programtype=r[1],h.string+=t+"\n";!1!==(t=n(e));){if(h.string+=t+"\n","#"===t.charAt(0)){h.comments+=t+"\n";continue}if((r=t.match(s))&&(h.gamma=parseFloat(r[1])),(r=t.match(i))&&(h.exposure=parseFloat(r[1])),(r=t.match(o))&&(h.valid|=2,h.format=r[1]),(r=t.match(l))&&(h.valid|=4,h.height=parseInt(r[1],10),h.width=parseInt(r[2],10)),2&h.valid&&4&h.valid)break}return 2&h.valid||a(3,"missing format specifier"),4&h.valid||a(3,"missing image size specifier"),h}(o),h=l.width,c=l.height,u=function(e,t,r){if(t<8||t>32767||2!==e[0]||2!==e[1]||128&e[2])return new Uint8Array(e);t!==(e[2]<<8|e[3])&&a(3,"wrong scanline width");let s=new Uint8Array(4*t*r);s.length||a(4,"unable to allocate buffer space");let i=0,n=0,o=4*t,l=new Uint8Array(4),h=new Uint8Array(o),c=r;for(;c>0&&n<e.byteLength;){n+4>e.byteLength&&a(1),l[0]=e[n++],l[1]=e[n++],l[2]=e[n++],l[3]=e[n++],(2!=l[0]||2!=l[1]||(l[2]<<8|l[3])!=t)&&a(3,"bad rgbe scanline format");let r=0,u;for(;r<o&&n<e.byteLength;){let t=(u=e[n++])>128;if(t&&(u-=128),(0===u||r+u>o)&&a(3,"bad scanline data"),t){let t=e[n++];for(let e=0;e<u;e++)h[r++]=t}else h.set(e.subarray(n,n+u),r),r+=u,n+=u}for(let e=0;e<t;e++){let r=0;s[i]=h[e+r],r+=t,s[i+1]=h[e+r],r+=t,s[i+2]=h[e+r],r+=t,s[i+3]=h[e+r],i+=4}c--}return s}(o.subarray(o.pos),h,c);switch(this.type){case s.RQf:let d=new Float32Array(4*(i=u.length/4));for(let e=0;e<i;e++)!function(e,t,r,s){let i=Math.pow(2,e[t+3]-128)/255;r[s+0]=e[t+0]*i,r[s+1]=e[t+1]*i,r[s+2]=e[t+2]*i,r[s+3]=1}(u,4*e,d,4*e);t=d,r=s.RQf;break;case s.ix0:let f=new Uint16Array(4*(i=u.length/4));for(let e=0;e<i;e++)!function(e,t,r,i){let a=Math.pow(2,e[t+3]-128)/255;r[i+0]=s.GxU.toHalfFloat(Math.min(e[t+0]*a,65504)),r[i+1]=s.GxU.toHalfFloat(Math.min(e[t+1]*a,65504)),r[i+2]=s.GxU.toHalfFloat(Math.min(e[t+2]*a,65504)),r[i+3]=s.GxU.toHalfFloat(1)}(u,4*e,f,4*e);t=f,r=s.ix0;break;default:throw Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:h,height:c,data:t,header:l.string,gamma:l.gamma,exposure:l.exposure,type:r}}setDataType(e){return this.type=e,this}load(e,t,r,i){return super.load(e,function(e,r){switch(e.type){case s.RQf:case s.ix0:e.colorSpace=s.Zr2,e.minFilter=s.k6q,e.magFilter=s.k6q,e.generateMipmaps=!1,e.flipY=!0}t&&t(e,r)},r,i)}}class a extends i{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}},1741:(e,t,r)=>{r.d(t,{C:()=>c});var s=r(7923),i=r(729);class a{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(256*e.random());this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[255&e];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let r,s,i,a,n,o=.5*(Math.sqrt(3)-1)*(e+t),l=Math.floor(e+o),h=Math.floor(t+o),c=(3-Math.sqrt(3))/6,u=(l+h)*c,d=e-(l-u),f=t-(h-u);d>f?(a=1,n=0):(a=0,n=1);let m=d-a+c,p=f-n+c,g=d-1+2*c,v=f-1+2*c,x=255&l,T=255&h,_=this.perm[x+this.perm[T]]%12,R=this.perm[x+a+this.perm[T+n]]%12,E=this.perm[x+1+this.perm[T+1]]%12,M=.5-d*d-f*f;M<0?r=0:(M*=M,r=M*M*this._dot(this.grad3[_],d,f));let w=.5-m*m-p*p;w<0?s=0:(w*=w,s=w*w*this._dot(this.grad3[R],m,p));let S=.5-g*g-v*v;return S<0?i=0:(S*=S,i=S*S*this._dot(this.grad3[E],g,v)),70*(r+s+i)}noise3d(e,t,r){let s,i,a,n,o,l,h,c,u,d,f=1/3*(e+t+r),m=Math.floor(e+f),p=Math.floor(t+f),g=Math.floor(r+f),v=1/6*(m+p+g),x=e-(m-v),T=t-(p-v),_=r-(g-v);x>=T?T>=_?(o=1,l=0,h=0,c=1,u=1,d=0):(x>=_?(o=1,l=0,h=0):(o=0,l=0,h=1),c=1,u=0,d=1):T<_?(o=0,l=0,h=1,c=0,u=1,d=1):x<_?(o=0,l=1,h=0,c=0,u=1,d=1):(o=0,l=1,h=0,c=1,u=1,d=0);let R=x-o+1/6,E=T-l+1/6,M=_-h+1/6,w=x-c+1/6*2,S=T-u+1/6*2,y=_-d+1/6*2,A=x-1+1/6*3,C=T-1+1/6*3,b=_-1+1/6*3,P=255&m,I=255&p,L=255&g,N=this.perm[P+this.perm[I+this.perm[L]]]%12,O=this.perm[P+o+this.perm[I+l+this.perm[L+h]]]%12,D=this.perm[P+c+this.perm[I+u+this.perm[L+d]]]%12,k=this.perm[P+1+this.perm[I+1+this.perm[L+1]]]%12,F=.6-x*x-T*T-_*_;F<0?s=0:(F*=F,s=F*F*this._dot3(this.grad3[N],x,T,_));let H=.6-R*R-E*E-M*M;H<0?i=0:(H*=H,i=H*H*this._dot3(this.grad3[O],R,E,M));let U=.6-w*w-S*S-y*y;U<0?a=0:(U*=U,a=U*U*this._dot3(this.grad3[D],w,S,y));let B=.6-A*A-C*C-b*b;return B<0?n=0:(B*=B,n=B*B*this._dot3(this.grad3[k],A,C,b)),32*(s+i+a+n)}noise4d(e,t,r,s){let i,a,n,o,l,h=this.grad4,c=this.simplex,u=this.perm,d=(5-Math.sqrt(5))/20,f=(Math.sqrt(5)-1)/4*(e+t+r+s),m=Math.floor(e+f),p=Math.floor(t+f),g=Math.floor(r+f),v=Math.floor(s+f),x=(m+p+g+v)*d,T=e-(m-x),_=t-(p-x),R=r-(g-x),E=s-(v-x),M=32*(T>_)+16*(T>R)+8*(_>R)+4*(T>E)+2*(_>E)+ +(R>E),w=+(c[M][0]>=3),S=+(c[M][1]>=3),y=+(c[M][2]>=3),A=+(c[M][3]>=3),C=+(c[M][0]>=2),b=+(c[M][1]>=2),P=+(c[M][2]>=2),I=+(c[M][3]>=2),L=+(c[M][0]>=1),N=+(c[M][1]>=1),O=+(c[M][2]>=1),D=+(c[M][3]>=1),k=T-w+d,F=_-S+d,H=R-y+d,U=E-A+d,B=T-C+2*d,j=_-b+2*d,G=R-P+2*d,K=E-I+2*d,z=T-L+3*d,V=_-N+3*d,X=R-O+3*d,Z=E-D+3*d,q=T-1+4*d,Q=_-1+4*d,Y=R-1+4*d,W=E-1+4*d,$=255&m,J=255&p,ee=255&g,et=255&v,er=u[$+u[J+u[ee+u[et]]]]%32,es=u[$+w+u[J+S+u[ee+y+u[et+A]]]]%32,ei=u[$+C+u[J+b+u[ee+P+u[et+I]]]]%32,ea=u[$+L+u[J+N+u[ee+O+u[et+D]]]]%32,en=u[$+1+u[J+1+u[ee+1+u[et+1]]]]%32,eo=.6-T*T-_*_-R*R-E*E;eo<0?i=0:(eo*=eo,i=eo*eo*this._dot4(h[er],T,_,R,E));let el=.6-k*k-F*F-H*H-U*U;el<0?a=0:(el*=el,a=el*el*this._dot4(h[es],k,F,H,U));let eh=.6-B*B-j*j-G*G-K*K;eh<0?n=0:(eh*=eh,n=eh*eh*this._dot4(h[ei],B,j,G,K));let ec=.6-z*z-V*V-X*X-Z*Z;ec<0?o=0:(ec*=ec,o=ec*ec*this._dot4(h[ea],z,V,X,Z));let eu=.6-q*q-Q*Q-Y*Y-W*W;return eu<0?l=0:(eu*=eu,l=eu*eu*this._dot4(h[en],q,Q,Y,W)),27*(i+a+n+o+l)}_dot(e,t,r){return e[0]*t+e[1]*r}_dot3(e,t,r,s){return e[0]*t+e[1]*r+e[2]*s}_dot4(e,t,r,s,i){return e[0]*t+e[1]*r+e[2]*s+e[3]*i}}let n={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new s.I9Y},cameraProjectionMatrix:{value:new s.kn4},cameraInverseProjectionMatrix:{value:new s.kn4},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},o={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},l={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new s.I9Y}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};var h=r(2393);class c extends i.o{constructor(e,t,r=512,a=512,c=32){super(),this.width=r,this.height=a,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(c),this._generateRandomKernelRotations();let u=new s.VCu;u.format=s.dcC,u.type=s.V3x,this.normalRenderTarget=new s.nWS(this.width,this.height,{minFilter:s.hxR,magFilter:s.hxR,type:s.ix0,depthTexture:u}),this.ssaoRenderTarget=new s.nWS(this.width,this.height,{type:s.ix0}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new s.BKk({defines:Object.assign({},n.defines),uniforms:s.LlO.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,blending:s.XIg}),this.ssaoMaterial.defines.KERNEL_SIZE=c,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new s.qBx,this.normalMaterial.blending=s.XIg,this.blurMaterial=new s.BKk({defines:Object.assign({},l.defines),uniforms:s.LlO.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new s.BKk({defines:Object.assign({},o.defines),uniforms:s.LlO.clone(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:s.XIg}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new s.BKk({uniforms:s.LlO.clone(h.Z.uniforms),vertexShader:h.Z.vertexShader,fragmentShader:h.Z.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:s.wn6,blendDst:s.ojh,blendEquation:s.gO9,blendSrcAlpha:s.hdd,blendDstAlpha:s.ojh,blendEquationAlpha:s.gO9}),this._fsQuad=new i.F(null),this._originalClearColor=new s.Q1f}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,r){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case c.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case c.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case c.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:r);break;case c.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case c.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=s.bCz,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,r,s,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,null!=s&&(e.setClearColor(s),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=n,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,r,s,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,s=t.clearColor||s,i=t.clearAlpha||i,null!=s&&(e.setClearColor(s),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=n,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){let t=this.kernel;for(let r=0;r<e;r++){let i=new s.Pq0;i.x=2*Math.random()-1,i.y=2*Math.random()-1,i.z=Math.random(),i.normalize();let a=r/e;a=s.cj9.lerp(.1,1,a*a),i.multiplyScalar(a),t.push(i)}}_generateRandomKernelRotations(){let e=new a,t=new Float32Array(16);for(let r=0;r<16;r++){let s=2*Math.random()-1,i=2*Math.random()-1;t[r]=e.noise3d(s,i,0)}this.noiseTexture=new s.GYF(t,4,4,s.VT0,s.RQf),this.noiseTexture.wrapS=s.GJx,this.noiseTexture.wrapT=s.GJx,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}c.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4}},2393:(e,t,r)=>{r.d(t,{Z:()=>s});let s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}},2503:(e,t,r)=>{r.d(t,{B:()=>a});var s=r(7923);function i(e,t){if(t===s.RJ4)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t!==s.rYR&&t!==s.O49)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e;{let r=e.getIndex();if(null===r){let t=[],s=e.getAttribute("position");if(void 0===s)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<s.count;e++)t.push(e);e.setIndex(t),r=e.getIndex()}let i=r.count-2,a=[];if(t===s.rYR)for(let e=1;e<=i;e++)a.push(r.getX(0)),a.push(r.getX(e)),a.push(r.getX(e+1));else for(let e=0;e<i;e++)e%2==0?(a.push(r.getX(e)),a.push(r.getX(e+1)),a.push(r.getX(e+2))):(a.push(r.getX(e+2)),a.push(r.getX(e+1)),a.push(r.getX(e)));a.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let n=e.clone();return n.setIndex(a),n.clearGroups(),n}}class a extends s.aHM{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new u(e)}),this.register(function(e){return new d(e)}),this.register(function(e){return new R(e)}),this.register(function(e){return new E(e)}),this.register(function(e){return new M(e)}),this.register(function(e){return new m(e)}),this.register(function(e){return new p(e)}),this.register(function(e){return new g(e)}),this.register(function(e){return new v(e)}),this.register(function(e){return new c(e)}),this.register(function(e){return new x(e)}),this.register(function(e){return new f(e)}),this.register(function(e){return new _(e)}),this.register(function(e){return new T(e)}),this.register(function(e){return new l(e)}),this.register(function(e){return new w(e)}),this.register(function(e){return new S(e)})}load(e,t,r,i){let a,n=this;if(""!==this.resourcePath)a=this.resourcePath;else if(""!==this.path){let t=s.r6x.extractUrlBase(e);a=s.r6x.resolveURL(t,this.path)}else a=s.r6x.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){i?i(t):console.error(t),n.manager.itemError(e),n.manager.itemEnd(e)},l=new s.Y9S(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(r){try{n.parse(r,a,function(r){t(r),n.manager.itemEnd(e)},o)}catch(e){o(e)}},r,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,s){let i,a={},n={},l=new TextDecoder;if("string"==typeof e)i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===y){try{a[o.KHR_BINARY_GLTF]=new A(e)}catch(e){s&&s(e);return}i=JSON.parse(a[o.KHR_BINARY_GLTF].content)}else i=JSON.parse(l.decode(e));else i=e;if(void 0===i.asset||i.asset.version[0]<2){s&&s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Z(i,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),n[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],r=i.extensionsRequired||[];switch(t){case o.KHR_MATERIALS_UNLIT:a[t]=new h;break;case o.KHR_DRACO_MESH_COMPRESSION:a[t]=new C(i,this.dracoLoader);break;case o.KHR_TEXTURE_TRANSFORM:a[t]=new b;break;case o.KHR_MESH_QUANTIZATION:a[t]=new P;break;default:r.indexOf(t)>=0&&void 0===n[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}c.setExtensions(a),c.setPlugins(n),c.parse(r,s)}parseAsync(e,t){let r=this;return new Promise(function(s,i){r.parse(e,t,s,i)})}}function n(){let e={};return{get:function(t){return e[t]},add:function(t,r){e[t]=r},remove:function(t){delete e[t]},removeAll:function(){e={}}}}let o={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class l{constructor(e){this.parser=e,this.name=o.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let r=0,s=t.length;r<s;r++){let s=t[r];s.extensions&&s.extensions[this.name]&&void 0!==s.extensions[this.name].light&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t,r=this.parser,i="light:"+e,a=r.cache.get(i);if(a)return a;let n=r.json,o=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e],l=new s.Q1f(0xffffff);void 0!==o.color&&l.setRGB(o.color[0],o.color[1],o.color[2],s.Zr2);let h=void 0!==o.range?o.range:0;switch(o.type){case"directional":(t=new s.ZyN(l)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new s.HiM(l)).distance=h;break;case"spot":(t=new s.nCl(l)).distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=void 0!==o.spot.innerConeAngle?o.spot.innerConeAngle:0,o.spot.outerConeAngle=void 0!==o.spot.outerConeAngle?o.spot.outerConeAngle:Math.PI/4,t.angle=o.spot.outerConeAngle,t.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return t.position.set(0,0,0),K(t,o),void 0!==o.intensity&&(t.intensity=o.intensity),t.name=r.createUniqueName(o.name||"light_"+e),a=Promise.resolve(t),r.cache.add(i,a),a}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,r=this.parser,s=r.json.nodes[e],i=(s.extensions&&s.extensions[this.name]||{}).light;return void 0===i?null:this._loadLight(i).then(function(e){return r._getNodeRef(t.cache,i,e)})}}class h{constructor(){this.name=o.KHR_MATERIALS_UNLIT}getMaterialType(){return s.V9B}extendParams(e,t,r){let i=[];e.color=new s.Q1f(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let t=a.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],s.Zr2),e.opacity=t[3]}void 0!==a.baseColorTexture&&i.push(r.assignTexture(e,"map",a.baseColorTexture,s.er$))}return Promise.all(i)}}class c{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name].emissiveStrength;return void 0!==s&&(t.emissiveIntensity=s),Promise.resolve()}}class u{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],n=i.extensions[this.name];if(void 0!==n.clearcoatFactor&&(t.clearcoat=n.clearcoatFactor),void 0!==n.clearcoatTexture&&a.push(r.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),void 0!==n.clearcoatRoughnessFactor&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),void 0!==n.clearcoatRoughnessTexture&&a.push(r.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),void 0!==n.clearcoatNormalTexture&&(a.push(r.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),void 0!==n.clearcoatNormalTexture.scale)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new s.I9Y(e,e)}return Promise.all(a)}}class d{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.dispersion=void 0!==s.dispersion?s.dispersion:0,Promise.resolve()}}class f{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let i=[],a=s.extensions[this.name];return void 0!==a.iridescenceFactor&&(t.iridescence=a.iridescenceFactor),void 0!==a.iridescenceTexture&&i.push(r.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),void 0!==a.iridescenceIor&&(t.iridescenceIOR=a.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==a.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),void 0!==a.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),void 0!==a.iridescenceThicknessTexture&&i.push(r.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(i)}}class m{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new s.Q1f(0,0,0),t.sheenRoughness=0,t.sheen=1;let n=i.extensions[this.name];if(void 0!==n.sheenColorFactor){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],s.Zr2)}return void 0!==n.sheenRoughnessFactor&&(t.sheenRoughness=n.sheenRoughnessFactor),void 0!==n.sheenColorTexture&&a.push(r.assignTexture(t,"sheenColorMap",n.sheenColorTexture,s.er$)),void 0!==n.sheenRoughnessTexture&&a.push(r.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}}class p{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let i=[],a=s.extensions[this.name];return void 0!==a.transmissionFactor&&(t.transmission=a.transmissionFactor),void 0!==a.transmissionTexture&&i.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(i)}}class g{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],n=i.extensions[this.name];t.thickness=void 0!==n.thicknessFactor?n.thicknessFactor:0,void 0!==n.thicknessTexture&&a.push(r.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let o=n.attenuationColor||[1,1,1];return t.attenuationColor=new s.Q1f().setRGB(o[0],o[1],o[2],s.Zr2),Promise.all(a)}}class v{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let s=r.extensions[this.name];return t.ior=void 0!==s.ior?s.ior:1.5,Promise.resolve()}}class x{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,i=r.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let a=[],n=i.extensions[this.name];t.specularIntensity=void 0!==n.specularFactor?n.specularFactor:1,void 0!==n.specularTexture&&a.push(r.assignTexture(t,"specularIntensityMap",n.specularTexture));let o=n.specularColorFactor||[1,1,1];return t.specularColor=new s.Q1f().setRGB(o[0],o[1],o[2],s.Zr2),void 0!==n.specularColorTexture&&a.push(r.assignTexture(t,"specularColorMap",n.specularColorTexture,s.er$)),Promise.all(a)}}class T{constructor(e){this.parser=e,this.name=o.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let i=[],a=s.extensions[this.name];return t.bumpScale=void 0!==a.bumpFactor?a.bumpFactor:1,void 0!==a.bumpTexture&&i.push(r.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(i)}}class _{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let i=[],a=s.extensions[this.name];return void 0!==a.anisotropyStrength&&(t.anisotropy=a.anisotropyStrength),void 0!==a.anisotropyRotation&&(t.anisotropyRotation=a.anisotropyRotation),void 0!==a.anisotropyTexture&&i.push(r.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(i)}}class R{constructor(e){this.parser=e,this.name=o.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let i=s.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(!(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return t.loadTextureImage(e,i.source,a)}}class E{constructor(e){this.parser=e,this.name=o.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,r=this.parser,s=r.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],n=s.images[a.source],o=r.textureLoader;if(n.uri){let e=r.options.manager.getHandler(n.uri);null!==e&&(o=e)}return r.loadTextureImage(e,a.source,o)}}class M{constructor(e){this.parser=e,this.name=o.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,r=this.parser,s=r.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],n=s.images[a.source],o=r.textureLoader;if(n.uri){let e=r.options.manager.getHandler(n.uri);null!==e&&(o=e)}return r.loadTextureImage(e,a.source,o)}}class w{constructor(e){this.name=o.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,r=t.bufferViews[e];if(!r.extensions||!r.extensions[this.name])return null;{let e=r.extensions[this.name],s=this.parser.getDependency("buffer",e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported)if(!(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return s.then(function(t){let r=e.byteOffset||0,s=e.byteLength||0,a=e.count,n=e.byteStride,o=new Uint8Array(t,r,s);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,n,o,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*n);return i.decodeGltfBuffer(new Uint8Array(t),a,n,o,e.mode,e.filter),t})})}}}class S{constructor(e){this.name=o.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||void 0===r.mesh)return null;for(let e of t.meshes[r.mesh].primitives)if(e.mode!==O.TRIANGLES&&e.mode!==O.TRIANGLE_STRIP&&e.mode!==O.TRIANGLE_FAN&&void 0!==e.mode)return null;let i=r.extensions[this.name].attributes,a=[],n={};for(let e in i)a.push(this.parser.getDependency("accessor",i[e]).then(t=>(n[e]=t,n[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),r=t.isGroup?t.children:[t],i=e[0].count,a=[];for(let e of r){let t=new s.kn4,r=new s.Pq0,o=new s.PTz,l=new s.Pq0(1,1,1),h=new s.ZLX(e.geometry,e.material,i);for(let e=0;e<i;e++)n.TRANSLATION&&r.fromBufferAttribute(n.TRANSLATION,e),n.ROTATION&&o.fromBufferAttribute(n.ROTATION,e),n.SCALE&&l.fromBufferAttribute(n.SCALE,e),h.setMatrixAt(e,t.compose(r,o,l));for(let t in n)if("_COLOR_0"===t){let e=n[t];h.instanceColor=new s.uWO(e.array,e.itemSize,e.normalized)}else"TRANSLATION"!==t&&"ROTATION"!==t&&"SCALE"!==t&&e.geometry.setAttribute(t,n[t]);s.B69.prototype.copy.call(h,e),this.parser.assignFinalMaterial(h),a.push(h)}return t.isGroup?(t.clear(),t.add(...a),t):a[0]}))}}let y="glTF";class A{constructor(e){this.name=o.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,12),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-12,i=new DataView(e,12),a=0;for(;a<s;){let t=i.getUint32(a,!0);a+=4;let s=i.getUint32(a,!0);if(a+=4,0x4e4f534a===s){let s=new Uint8Array(e,12+a,t);this.content=r.decode(s)}else if(5130562===s){let r=12+a;this.body=e.slice(r,r+t)}a+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}}class C{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=o.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let r=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,o={},l={},h={};for(let e in n)o[U[e]||e.toLowerCase()]=n[e];for(let t in e.attributes){let s=U[t]||t.toLowerCase();if(void 0!==n[t]){let i=r.accessors[e.attributes[t]],a=D[i.componentType];h[s]=a.name,l[s]=!0===i.normalized}}return t.getDependency("bufferView",a).then(function(e){return new Promise(function(t,r){i.decodeDracoFile(e,function(e){for(let t in e.attributes){let r=e.attributes[t],s=l[t];void 0!==s&&(r.normalized=s)}t(e)},o,h,s.Zr2,r)})})}}class b{constructor(){this.name=o.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(void 0===t.texCoord||t.texCoord===e.channel)&&void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.texCoord&&(e.channel=t.texCoord),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class P{constructor(){this.name=o.KHR_MESH_QUANTIZATION}}class I extends s.lGw{constructor(e,t,r,s){super(e,t,r,s)}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,i=e*s*3+s;for(let e=0;e!==s;e++)t[e]=r[i+e];return t}interpolate_(e,t,r,s){let i=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=2*n,l=3*n,h=s-t,c=(r-t)/h,u=c*c,d=u*c,f=e*l,m=f-l,p=-2*d+3*u,g=d-u,v=1-p,x=g-u+c;for(let e=0;e!==n;e++){let t=a[m+e+n],r=a[m+e+o]*h,s=a[f+e+n],l=a[f+e]*h;i[e]=v*t+x*r+p*s+g*l}return i}}let L=new s.PTz;class N extends I{interpolate_(e,t,r,s){let i=super.interpolate_(e,t,r,s);return L.fromArray(i).normalize().toArray(i),i}}let O={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},D={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},k={9728:s.hxR,9729:s.k6q,9984:s.pHI,9985:s.kRr,9986:s.Cfg,9987:s.$_I},F={33071:s.ghU,33648:s.kTW,10497:s.GJx},H={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},U={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},B={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j={CUBICSPLINE:void 0,LINEAR:s.PJ3,STEP:s.ljd};function G(e,t,r){for(let s in r.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=r.extensions[s])}function K(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function z(e){let t="",r=Object.keys(e).sort();for(let s=0,i=r.length;s<i;s++)t+=r[s]+":"+e[r[s]]+";";return t}function V(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}let X=new s.kn4;class Z{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new n,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,i=-1,a=!1,o=-1;if("u">typeof navigator){let e=navigator.userAgent;r=!0===/^((?!chrome|android).)*safari/i.test(e);let t=e.match(/Version\/(\d+)/);i=r&&t?parseInt(t[1],10):-1,o=(a=e.indexOf("Firefox")>-1)?e.match(/Firefox\/([0-9]+)\./)[1]:-1}"u"<typeof createImageBitmap||r&&i<17||a&&o<98?this.textureLoader=new s.Tap(this.options.manager):this.textureLoader=new s.Kzg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new s.Y9S(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let r=this,s=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(t){let a={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:r,userData:{}};return G(i,a,s),K(a,s),Promise.all(r._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let s=t[r].joints;for(let t=0,r=s.length;t<r;t++)e[s[t]].isBone=!0}for(let t=0,s=e.length;t<s;t++){let s=e[t];void 0!==s.mesh&&(this._addNodeRef(this.meshCache,s.mesh),void 0!==s.skin&&(r[s.mesh].isSkinnedMesh=!0)),void 0!==s.camera&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;let s=r.clone(),i=(e,t)=>{let r=this.associations.get(e);for(let[s,a]of(null!=r&&this.associations.set(t,r),e.children.entries()))i(a,t.children[s])};return i(r,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){let s=e(t[r]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let r=[];for(let s=0;s<t.length;s++){let i=e(t[s]);i&&r.push(i)}return r}getDependency(e,t){let r=e+":"+t,s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":s=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(!(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(r,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let r=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,s){return r.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],r=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[o.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(e,a){r.load(s.r6x.resolveURL(t.uri,i.path),e,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let r=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+r)})}loadAccessor(e){let t=this,r=this.json,i=this.json.accessors[e];if(void 0===i.bufferView&&void 0===i.sparse){let e=H[i.type],t=D[i.componentType],r=!0===i.normalized,a=new t(i.count*e);return Promise.resolve(new s.THS(a,e,r))}let a=[];return void 0!==i.bufferView?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),void 0!==i.sparse&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(e){let a,n,o=e[0],l=H[i.type],h=D[i.componentType],c=h.BYTES_PER_ELEMENT,u=c*l,d=i.byteOffset||0,f=void 0!==i.bufferView?r.bufferViews[i.bufferView].byteStride:void 0,m=!0===i.normalized;if(f&&f!==u){let e=Math.floor(d/f),r="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+e+":"+i.count,u=t.cache.get(r);u||(a=new h(o,e*f,i.count*f/c),u=new s.eB$(a,f/c),t.cache.add(r,u)),n=new s.eHs(u,l,d%f/c,m)}else a=null===o?new h(i.count*l):new h(o,d,i.count*l),n=new s.THS(a,l,m);if(void 0!==i.sparse){let t=H.SCALAR,r=D[i.sparse.indices.componentType],a=i.sparse.indices.byteOffset||0,c=i.sparse.values.byteOffset||0,u=new r(e[1],a,i.sparse.count*t),d=new h(e[2],c,i.sparse.count*l);null!==o&&(n=new s.THS(n.array.slice(),n.itemSize,n.normalized)),n.normalized=!1;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(n.setX(t,d[e*l]),l>=2&&n.setY(t,d[e*l+1]),l>=3&&n.setZ(t,d[e*l+2]),l>=4&&n.setW(t,d[e*l+3]),l>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}n.normalized=m}return n})}loadTexture(e){let t=this.json,r=this.options,s=t.textures[e].source,i=t.images[s],a=this.textureLoader;if(i.uri){let e=r.manager.getHandler(i.uri);null!==e&&(a=e)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,r){let i=this,a=this.json,n=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+n.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(t,r).then(function(t){t.flipY=!1,t.name=n.name||o.name||"",""===t.name&&"string"==typeof o.uri&&!1===o.uri.startsWith("data:image/")&&(t.name=o.uri);let r=(a.samplers||{})[n.sampler]||{};return t.magFilter=k[r.magFilter]||s.k6q,t.minFilter=k[r.minFilter]||s.$_I,t.wrapS=F[r.wrapS]||s.GJx,t.wrapT=F[r.wrapT]||s.GJx,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==s.hxR&&t.minFilter!==s.k6q,i.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){let r=this.json,i=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],n=self.URL||self.webkitURL,o=a.uri||"",l=!1;if(void 0!==a.bufferView)o=this.getDependency("bufferView",a.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:a.mimeType});return o=n.createObjectURL(t)});else if(void 0===a.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(e){return new Promise(function(r,a){let n=r;!0===t.isImageBitmapLoader&&(n=function(e){let t=new s.gPd(e);t.needsUpdate=!0,r(t)}),t.load(s.r6x.resolveURL(e,i.path),n,void 0,a)})}).then(function(e){var t;return!0===l&&n.revokeObjectURL(o),K(e,a),e.userData.mimeType=a.mimeType||((t=a.uri).search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/)?"image/jpeg":t.search(/\.webp($|\?)/i)>0||0===t.search(/^data\:image\/webp/)?"image/webp":t.search(/\.ktx2($|\?)/i)>0||0===t.search(/^data\:image\/ktx2/)?"image/ktx2":"image/png"),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),e});return this.sourceCache[e]=h,h}assignTexture(e,t,r,s){let i=this;return this.getDependency("texture",r.index).then(function(a){if(!a)return null;if(void 0!==r.texCoord&&r.texCoord>0&&((a=a.clone()).channel=r.texCoord),i.extensions[o.KHR_TEXTURE_TRANSFORM]){let e=void 0!==r.extensions?r.extensions[o.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=i.associations.get(a);a=i.extensions[o.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return void 0!==s&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,r=e.material,i=void 0===t.attributes.tangent,a=void 0!==t.attributes.color,n=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+r.uuid,t=this.cache.get(e);t||(t=new s.BH$,s.imn.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,t.sizeAttenuation=!1,this.cache.add(e,t)),r=t}else if(e.isLine){let e="LineBasicMaterial:"+r.uuid,t=this.cache.get(e);t||(t=new s.mrM,s.imn.prototype.copy.call(t,r),t.color.copy(r.color),t.map=r.map,this.cache.add(e,t)),r=t}if(i||a||n){let e="ClonedMaterial:"+r.uuid+":";i&&(e+="derivative-tangents:"),a&&(e+="vertex-colors:"),n&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=r.clone(),a&&(t.vertexColors=!0),n&&(t.flatShading=!0),i&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(r))),r=t}e.material=r}getMaterialType(){return s._4j}loadMaterial(e){let t,r=this,i=this.json,a=this.extensions,n=i.materials[e],l={},h=n.extensions||{},c=[];if(h[o.KHR_MATERIALS_UNLIT]){let e=a[o.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),c.push(e.extendParams(l,n,r))}else{let i=n.pbrMetallicRoughness||{};if(l.color=new s.Q1f(1,1,1),l.opacity=1,Array.isArray(i.baseColorFactor)){let e=i.baseColorFactor;l.color.setRGB(e[0],e[1],e[2],s.Zr2),l.opacity=e[3]}void 0!==i.baseColorTexture&&c.push(r.assignTexture(l,"map",i.baseColorTexture,s.er$)),l.metalness=void 0!==i.metallicFactor?i.metallicFactor:1,l.roughness=void 0!==i.roughnessFactor?i.roughnessFactor:1,void 0!==i.metallicRoughnessTexture&&(c.push(r.assignTexture(l,"metalnessMap",i.metallicRoughnessTexture)),c.push(r.assignTexture(l,"roughnessMap",i.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,l)})))}!0===n.doubleSided&&(l.side=s.$EB);let u=n.alphaMode||"OPAQUE";if("BLEND"===u?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,"MASK"===u&&(l.alphaTest=void 0!==n.alphaCutoff?n.alphaCutoff:.5)),void 0!==n.normalTexture&&t!==s.V9B&&(c.push(r.assignTexture(l,"normalMap",n.normalTexture)),l.normalScale=new s.I9Y(1,1),void 0!==n.normalTexture.scale)){let e=n.normalTexture.scale;l.normalScale.set(e,e)}if(void 0!==n.occlusionTexture&&t!==s.V9B&&(c.push(r.assignTexture(l,"aoMap",n.occlusionTexture)),void 0!==n.occlusionTexture.strength&&(l.aoMapIntensity=n.occlusionTexture.strength)),void 0!==n.emissiveFactor&&t!==s.V9B){let e=n.emissiveFactor;l.emissive=new s.Q1f().setRGB(e[0],e[1],e[2],s.Zr2)}return void 0!==n.emissiveTexture&&t!==s.V9B&&c.push(r.assignTexture(l,"emissiveMap",n.emissiveTexture,s.er$)),Promise.all(c).then(function(){let s=new t(l);return n.name&&(s.name=n.name),K(s,n),r.associations.set(s,{materials:e}),n.extensions&&G(a,s,n),s})}createUniqueName(e){let t=s.Nwf.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,r=this.extensions,i=this.primitiveCache,a=[];for(let n=0,l=e.length;n<l;n++){let l=e[n],h=function(e){let t,r=e.extensions&&e.extensions[o.KHR_DRACO_MESH_COMPRESSION];if(t=r?"draco:"+r.bufferView+":"+r.indices+":"+z(r.attributes):e.indices+":"+z(e.attributes)+":"+e.mode,void 0!==e.targets)for(let r=0,s=e.targets.length;r<s;r++)t+=":"+z(e.targets[r]);return t}(l),c=i[h];if(c)a.push(c.promise);else{let e;e=l.extensions&&l.extensions[o.KHR_DRACO_MESH_COMPRESSION]?function(e){return r[o.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(r){return q(r,e,t)})}(l):q(new s.LoY,l,t),i[h]={primitive:l,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,r=this.json,a=this.extensions,n=r.meshes[e],o=n.primitives,l=[];for(let e=0,t=o.length;e<t;e++){var h;let t=void 0===o[e].material?(void 0===(h=this.cache).DefaultMaterial&&(h.DefaultMaterial=new s._4j({color:0xffffff,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:s.hB5})),h.DefaultMaterial):this.getDependency("material",o[e].material);l.push(t)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(r){let l=r.slice(0,r.length-1),h=r[r.length-1],c=[];for(let r=0,u=h.length;r<u;r++){let u,d=h[r],f=o[r],m=l[r];if(f.mode===O.TRIANGLES||f.mode===O.TRIANGLE_STRIP||f.mode===O.TRIANGLE_FAN||void 0===f.mode)!0===(u=!0===n.isSkinnedMesh?new s.I46(d,m):new s.eaF(d,m)).isSkinnedMesh&&u.normalizeSkinWeights(),f.mode===O.TRIANGLE_STRIP?u.geometry=i(u.geometry,s.O49):f.mode===O.TRIANGLE_FAN&&(u.geometry=i(u.geometry,s.rYR));else if(f.mode===O.LINES)u=new s.DXC(d,m);else if(f.mode===O.LINE_STRIP)u=new s.N1A(d,m);else if(f.mode===O.LINE_LOOP)u=new s.FCc(d,m);else if(f.mode===O.POINTS)u=new s.ONl(d,m);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(u.geometry.morphAttributes).length>0&&function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let r=0,s=t.weights.length;r<s;r++)e.morphTargetInfluences[r]=t.weights[r];if(t.extras&&Array.isArray(t.extras.targetNames)){let r=t.extras.targetNames;if(e.morphTargetInfluences.length===r.length){e.morphTargetDictionary={};for(let t=0,s=r.length;t<s;t++)e.morphTargetDictionary[r[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(u,n),u.name=t.createUniqueName(n.name||"mesh_"+e),K(u,n),f.extensions&&G(a,u,f),t.assignFinalMaterial(u),c.push(u)}for(let r=0,s=c.length;r<s;r++)t.associations.set(c[r],{meshes:e,primitives:r});if(1===c.length)return n.extensions&&G(a,c[0],n),c[0];let u=new s.YJl;n.extensions&&G(a,u,n),t.associations.set(u,{meshes:e});for(let e=0,t=c.length;e<t;e++)u.add(c[e]);return u})}loadCamera(e){let t,r=this.json.cameras[e],i=r[r.type];return i?("perspective"===r.type?t=new s.ubm(s.cj9.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):"orthographic"===r.type&&(t=new s.qUd(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),K(t,r),Promise.resolve(t)):void console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){let t=this.json.skins[e],r=[];for(let e=0,s=t.joints.length;e<s;e++)r.push(this._loadNodeShallow(t.joints[e]));return void 0!==t.inverseBindMatrices?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(e){let r=e.pop(),i=[],a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n];if(o){i.push(o);let e=new s.kn4;null!==r&&e.fromArray(r.array,16*n),a.push(e)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[n])}return new s.EAD(i,a)})}loadAnimation(e){let t=this.json,r=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,n=[],o=[],l=[],h=[],c=[];for(let e=0,t=i.channels.length;e<t;e++){let t=i.channels[e],r=i.samplers[t.sampler],s=t.target,a=s.node,u=void 0!==i.parameters?i.parameters[r.input]:r.input,d=void 0!==i.parameters?i.parameters[r.output]:r.output;void 0!==s.node&&(n.push(this.getDependency("node",a)),o.push(this.getDependency("accessor",u)),l.push(this.getDependency("accessor",d)),h.push(r),c.push(s))}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(e){let t=e[0],n=e[1],o=e[2],l=e[3],h=e[4],c=[];for(let e=0,s=t.length;e<s;e++){let s=t[e],i=n[e],a=o[e],u=l[e],d=h[e];if(void 0===s)continue;s.updateMatrix&&s.updateMatrix();let f=r._createAnimationTracks(s,i,a,u,d);if(f)for(let e=0;e<f.length;e++)c.push(f[e])}let u=new s.tz3(a,void 0,c);return K(u,i),u})}createNodeMesh(e){let t=this.json,r=this,s=t.nodes[e];return void 0===s.mesh?null:r.getDependency("mesh",s.mesh).then(function(e){let t=r._getNodeRef(r.meshCache,s.mesh,e);return void 0!==s.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,r=s.weights.length;t<r;t++)e.morphTargetInfluences[t]=s.weights[t]}),t})}loadNode(e){let t=this.json.nodes[e],r=this._loadNodeShallow(e),s=[],i=t.children||[];for(let e=0,t=i.length;e<t;e++)s.push(this.getDependency("node",i[e]));let a=void 0===t.skin?Promise.resolve(null):this.getDependency("skin",t.skin);return Promise.all([r,Promise.all(s),a]).then(function(e){let t=e[0],r=e[1],s=e[2];null!==s&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(s,X)});for(let e=0,s=r.length;e<s;e++)t.add(r[e]);return t})}_loadNodeShallow(e){let t=this.json,r=this.extensions,i=this;if(void 0!==this.nodeCache[e])return this.nodeCache[e];let a=t.nodes[e],n=a.name?i.createUniqueName(a.name):"",o=[],l=i._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return l&&o.push(l),void 0!==a.camera&&o.push(i.getDependency("camera",a.camera).then(function(e){return i._getNodeRef(i.cameraCache,a.camera,e)})),i._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if((o=!0===a.isBone?new s.$Kf:t.length>1?new s.YJl:1===t.length?t[0]:new s.B69)!==t[0])for(let e=0,r=t.length;e<r;e++)o.add(t[e]);if(a.name&&(o.userData.name=a.name,o.name=n),K(o,a),a.extensions&&G(r,o,a),void 0!==a.matrix){let e=new s.kn4;e.fromArray(a.matrix),o.applyMatrix4(e)}else void 0!==a.translation&&o.position.fromArray(a.translation),void 0!==a.rotation&&o.quaternion.fromArray(a.rotation),void 0!==a.scale&&o.scale.fromArray(a.scale);if(i.associations.has(o)){if(void 0!==a.mesh&&i.meshCache.refs[a.mesh]>1){let e=i.associations.get(o);i.associations.set(o,{...e})}}else i.associations.set(o,{});return i.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,r=this.json.scenes[e],i=this,a=new s.YJl;r.name&&(a.name=i.createUniqueName(r.name)),K(a,r),r.extensions&&G(t,a,r);let n=r.nodes||[],o=[];for(let e=0,t=n.length;e<t;e++)o.push(i.getDependency("node",n[e]));return Promise.all(o).then(function(e){for(let t=0,r=e.length;t<r;t++)a.add(e[t]);return i.associations=(e=>{let t=new Map;for(let[e,r]of i.associations)(e instanceof s.imn||e instanceof s.gPd)&&t.set(e,r);return e.traverse(e=>{let r=i.associations.get(e);null!=r&&t.set(e,r)}),t})(a),a})}_createAnimationTracks(e,t,r,i,a){let n,o=[],l=e.name?e.name:e.uuid,h=[];switch(B[a.path]===B.weights?e.traverse(function(e){e.morphTargetInfluences&&h.push(e.name?e.name:e.uuid)}):h.push(l),B[a.path]){case B.weights:n=s.Hit;break;case B.rotation:n=s.MBL;break;case B.translation:case B.scale:n=s.RiT;break;default:n=1===r.itemSize?s.Hit:s.RiT}let c=void 0!==i.interpolation?j[i.interpolation]:s.PJ3,u=this._getArrayFromAccessor(r);for(let e=0,r=h.length;e<r;e++){let r=new n(h[e]+"."+B[a.path],t.array,u,c);"CUBICSPLINE"===i.interpolation&&this._createCubicSplineTrackInterpolant(r),o.push(r)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=V(t.constructor),r=new Float32Array(t.length);for(let s=0,i=t.length;s<i;s++)r[s]=t[s]*e;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof s.MBL?N:I)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function q(e,t,r){let i=t.attributes,a=[];for(let t in i){let s=U[t]||t.toLowerCase();s in e.attributes||a.push(function(t,s){return r.getDependency("accessor",t).then(function(t){e.setAttribute(s,t)})}(i[t],s))}if(void 0!==t.indices&&!e.index){let s=r.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});a.push(s)}return s.ppV.workingColorSpace!==s.Zr2&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${s.ppV.workingColorSpace}" not supported.`),K(e,t),!function(e,t,r){let i=t.attributes,a=new s.NRn;if(void 0===i.POSITION)return;{let e=r.json.accessors[i.POSITION],t=e.min,n=e.max;if(void 0===t||void 0===n)return console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(a.set(new s.Pq0(t[0],t[1],t[2]),new s.Pq0(n[0],n[1],n[2])),e.normalized){let t=V(D[e.componentType]);a.min.multiplyScalar(t),a.max.multiplyScalar(t)}}let n=t.targets;if(void 0!==n){let e=new s.Pq0,t=new s.Pq0;for(let s=0,i=n.length;s<i;s++){let i=n[s];if(void 0!==i.POSITION){let s=r.json.accessors[i.POSITION],a=s.min,n=s.max;if(void 0!==a&&void 0!==n){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(n[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(n[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(n[2]))),s.normalized){let e=V(D[s.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(e)}e.boundingBox=a;let o=new s.iyt;a.getCenter(o.center),o.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=o}(e,t,r),Promise.all(a).then(function(){return void 0!==t.targets?function(e,t,r){let s=!1,i=!1,a=!1;for(let e=0,r=t.length;e<r;e++){let r=t[e];if(void 0!==r.POSITION&&(s=!0),void 0!==r.NORMAL&&(i=!0),void 0!==r.COLOR_0&&(a=!0),s&&i&&a)break}if(!s&&!i&&!a)return Promise.resolve(e);let n=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let c=t[h];if(s){let t=void 0!==c.POSITION?r.getDependency("accessor",c.POSITION):e.attributes.position;n.push(t)}if(i){let t=void 0!==c.NORMAL?r.getDependency("accessor",c.NORMAL):e.attributes.normal;o.push(t)}if(a){let t=void 0!==c.COLOR_0?r.getDependency("accessor",c.COLOR_0):e.attributes.color;l.push(t)}}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(l)]).then(function(t){let r=t[0],n=t[1],o=t[2];return s&&(e.morphAttributes.position=r),i&&(e.morphAttributes.normal=n),a&&(e.morphAttributes.color=o),e.morphTargetsRelative=!0,e})}(e,t.targets,r):e})}},6368:(e,t,r)=>{r.d(t,{s:()=>h});var s=r(7923),i=r(2393),a=r(729);class n extends a.o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof s.BKk?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=s.LlO.clone(e.uniforms),this.material=new s.BKk({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new a.F(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class o extends a.o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let s,i,a=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(s=0,i=1):(s=1,i=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,0xffffffff),n.buffers.stencil.setClear(i),n.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,0xffffffff),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}}class l extends a.o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class h{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let r=e.getSize(new s.I9Y);this._width=r.width,this._height=r.height,(t=new s.nWS(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:s.ix0})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n(i.Z),this.copyPass.material.blending=s.XIg,this.clock=new s.zD7}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,s=this.passes.length;t<s;t++){let s=this.passes[t];if(!1!==s.enabled){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==o&&(s instanceof o?r=!0:s instanceof l&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new s.I9Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(r,s),this.renderTarget2.setSize(r,s);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},7004:(e,t,r)=>{r.d(t,{m:()=>i});var s=r(7923);class i extends s.eaF{constructor(){let e=i.SkyShader,t=new s.BKk({name:e.name,uniforms:s.LlO.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:s.hsX,depthWrite:!1});super(new s.iNn(1,1,1),t),this.isSky=!0}}i.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new s.Pq0},up:{value:new s.Pq0(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --\x3e y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --\x3e x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`}},7281:(e,t,r)=>{r.d(t,{j:()=>n});var s=r(7923);let i=new s.Pq0;function a(e,t,r,s,a,n){let o=2*Math.PI*a/4,l=Math.max(n-2*a,0),h=Math.PI/4;i.copy(t),i[s]=0,i.normalize();let c=.5*o/(o+l),u=1-i.angleTo(e)/h;return 1===Math.sign(i[r])?u*c:l/(o+l)+c+c*(1-u)}class n extends s.iNn{constructor(e=1,t=1,r=1,i=2,n=.1){let o=2*i+1;if(n=Math.min(e/2,t/2,r/2,n),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:i,radius:n},1===o)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let h=new s.Pq0,c=new s.Pq0,u=new s.Pq0(e,t,r).divideScalar(2).subScalar(n),d=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,p=d.length/6,g=new s.Pq0,v=.5/o;for(let s=0,i=0;s<d.length;s+=3,i+=2)switch(h.fromArray(d,s),c.copy(h),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),d[s+0]=u.x*Math.sign(h.x)+c.x*n,d[s+1]=u.y*Math.sign(h.y)+c.y*n,d[s+2]=u.z*Math.sign(h.z)+c.z*n,f[s+0]=c.x,f[s+1]=c.y,f[s+2]=c.z,Math.floor(s/p)){case 0:g.set(1,0,0),m[i+0]=a(g,c,"z","y",n,r),m[i+1]=1-a(g,c,"y","z",n,t);break;case 1:g.set(-1,0,0),m[i+0]=1-a(g,c,"z","y",n,r),m[i+1]=1-a(g,c,"y","z",n,t);break;case 2:g.set(0,1,0),m[i+0]=1-a(g,c,"x","z",n,e),m[i+1]=a(g,c,"z","x",n,r);break;case 3:g.set(0,-1,0),m[i+0]=1-a(g,c,"x","z",n,e),m[i+1]=1-a(g,c,"z","x",n,r);break;case 4:g.set(0,0,1),m[i+0]=1-a(g,c,"x","y",n,e),m[i+1]=1-a(g,c,"y","x",n,t);break;case 5:g.set(0,0,-1),m[i+0]=a(g,c,"x","y",n,e),m[i+1]=1-a(g,c,"y","x",n,t)}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}}},7606:(e,t,r)=>{r.d(t,{X:()=>n});var s=r(7923),i=r(729);let a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class n extends i.o{constructor(){super(),this.uniforms=s.LlO.clone(a.uniforms),this.material=new s.D$Q({name:a.name,uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this._fsQuad=new i.F(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},s.ppV.getTransfer(this._outputColorSpace)===s.KLL&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===s.kyO?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===s.Mjd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===s.nNL?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===s.FV?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===s.LAk?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===s.aJ8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===s.g7M&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}},8309:(e,t,r)=>{r.d(t,{A:()=>a});var s=r(7923),i=r(729);class a extends i.o{constructor(e,t,r=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new s.Q1f}render(e,t,r){let s,i,a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(i=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(s),null!==this.overrideMaterial&&(this.scene.overrideMaterial=i),e.autoClear=a}}}}]);