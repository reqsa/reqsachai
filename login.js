async function loginUser(email, password) {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    // Giriş başarılı, yönlendirme veya başka işlem yapabilirsiniz.
    console.log("Giriş başarılı:", userCredential.user.email);
    // Örneğin ana sayfaya yönlendirme:
    window.location.href = "index.html";
  } catch (error) {
    console.error(error);
    if (error.code === "auth/invalid-login-credentials" || error.code === "auth/user-not-found") {
      alert("Kullanıcı bulunamadı veya bilgiler yanlış.");
    } else if (error.code === "auth/wrong-password") {
      alert("Şifre yanlış.");
    } else {
      alert("Bir hata oluştu: " + error.message);
    }
  }
  
}