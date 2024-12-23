<script setup lang="ts">

	useHead({
		title: 'Sign In',
		meta: [
		{ 
			name: 'description', 
			content: 'Sign In Nuxt 3, IT Genius Engineering' 
		},
		{
			name: 'keywords',
			content: 'Sign In, Nuxt 3, Learning Nuxt 3'
		},
		],
	})

	// sweetalert2
	const { $swal } = useNuxtApp()

	// create const for useCookie()
	const token = useCookie('token', {
		maxAge: 60 * 60, // 1 hour
		// expires: new Date(Date.now() + 60 * 60 * 24 * 7), // 1 week
	})

	// ref const for email and password
	const email = ref('')
	const password = ref('')

	// useFormRules() for email and password
	const { ruleEmail, rulePassLen, ruleRequired } = useFormRules()

	// useRoute() for redirect
	const router = useRouter()

	// submit form
	const submit = async () => {

		// console.log(ruleEmail(email.value))
		
		// check form is valid
		if (ruleRequired(email.value) == true && ruleEmail(email.value) == true && rulePassLen(password.value) == true) {

			// console.log(email.value, password.value)

			// useRuntimeConfig() for get env
			const config = useRuntimeConfig()
			const STRAPI_URL: string = config.strapi.url

			// login strapi with usefetch()
			const { data, error } = await useFetch(`${STRAPI_URL}/auth/local`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					"identifier": email.value,
					"password": password.value
				}),
			})

			// check error
			if (error.value != null) { // error
				
				if(error.value.status === 400){
					// console.log('Login failed! Please check your email and password.')
					$swal.fire({
						icon: 'error',
						title: 'เข้าสู่ระบบไม่สำเร็จ',
						text: 'กรุณาตรวจสอบอีเมล์และรหัสผ่านของคุณ',
						confirmButtonText: 'ปิดหน้าต่าง'
					})
				}else{
					console.log('Request failed:', error.value.message)
				}

			}else{ // success

				let timerInterval: any
				$swal.fire({
					title: 'กำลังเข้าสู่ระบบ',
					html: 'กรุณารอสักครู่ <b></b> วินาที',
					timer: 1000,
					timerProgressBar: true,
					didOpen: () => {
						$swal.showLoading()
						timerInterval = setInterval(() => {
						const content = $swal.getHtmlContainer()
						if (content) {
							const b = content.querySelector('b')
							if (b) {
								b.textContent =$swal.getTimerLeft() / 1000
							}
						}
						}, 100)
					},
					willClose: () => {
						clearInterval(timerInterval)
					}
				}).then( async (result: any) => {
					if(result.dismiss === $swal.DismissReason.timer) {

						// set token to cookie
						token.value = (data as { value: { jwt: string } }).value.jwt

						// redirect to dashboard
						await router.push({path:'/backend/dashboard'})
					}
				})

			}

		}

	}

	
</script>
<!-- src="https://wallpaper.dog/large/5557744.jpg"   -->
<template>
	<VContainer fluid class="fill-height pa-0">
		<VRow no-gutters align="center" justify="center" class="fill-height">
            <VCol class="hidden-sm-and-down fill-height" md="6" lg="6">
				<VImg
					src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t39.30808-1/405518688_2009934092719573_7441190359895067418_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFBRUTbzkP0EcSRHhPnVE9LhJJ8TRGFy4SEknxNEYXLhKIYnbpcNlTMgQFFBKthFkQzDBjYFJlWz0cRUyeV0_Z2&_nc_ohc=56M9Od4Y81QQ7kNvgFTrkgG&_nc_oc=Adh7zwnoYa4nVoOh5DkVjwyj-Y-qSD85OI3memadgEN2OPCrIIjWzTRBWfcCd1QEOJ8Lh1MRj96uJNeobybcl9LB&_nc_zt=24&_nc_ht=scontent.fbkk12-3.fna&_nc_gid=AQ-jDLsMCw72FIKm5AdbDnp&oh=00_AYD5jaRnFHL0D6dMveMwf8ARt9a8CYe2PehLMb1Epadirw&oe=676C45C5"
					cover
					class="h-100 rounded-xl rounded-ts-0 rounded-bs-0 d-flex align-center justify-center"
				>
					<div class="text-center w-50 text-white mx-auto">
						<h1 class="mb-4">ยินดีต้อนรับการกลับมาของคุณ</h1>
						<p>
							ยินดีต้อนรับสู่ระบบจัดการสินค้า ขอเชิญคุณเข้าสู่ระบบเพื่อสัมผัสประสบการณ์การจัดการสินค้าที่สะดวกรวดเร็วและแม่นยำ เริ่มการทำงานของคุณได้วันนี้ พร้อมกับเรา!
						</p>
					</div>
				</VImg>
			</VCol>
			<VCol cols="12" md="6" lg="6" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6" class="pa-3">
						<h1>เข้าสู่ระบบ</h1>
						<p class="text-medium-emphasis">ป้อนอีเมล์และรหัสผ่านสำหรับเข้าใช้งาน</p>

						<VForm @submit.prevent="submit" class="mt-7">
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="email">Email</label>
								<VTextField
									v-model="email"
									:rules="[ruleRequired, ruleEmail]"
									prepend-inner-icon="fluent:mail-24-regular"
									id="email"
									name="email"
									type="email"
								/>
							</div>
							<div class="mt-1">
								<label class="label text-grey-darken-2" for="password">Password</label>
								<VTextField
									v-model="password"
									:rules="[ruleRequired, rulePassLen]"
									prepend-inner-icon="fluent:password-20-regular"
									id="password"
									name="password"
									type="password"
								/>
							</div>
							<div class="mt-5">
								<VBtn type="submit" block min-height="44" class="gradient primary">Sign In</VBtn>
							</div>
						</VForm>
                        
						<p class="text-center mt-10">
							<span
								>ยังไม่ได้เป็นสมาชิก ?
								<NuxtLink to="/signup" class="font-weight-bold text-primary"
									>ลงทะเบียนที่นี่</NuxtLink
								></span
							>
						</p>
					</VCol>
				</VRow>
			</VCol>
		</VRow>
	</VContainer>
</template>

<style scoped>

</style>