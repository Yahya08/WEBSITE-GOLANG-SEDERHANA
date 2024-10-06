package main

import (
    "html/template"
    "net/http"
)

type PageData struct {
    Title   string
    Message string
}

func main() {
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/hello", helloHandler)
    http.HandleFunc("/greet", greetHandler)

    println("Server berjalan pada http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    data := PageData{
        Title:   "Beranda",
        Message: "Selamat datang di website Go sederhana!",
    }
    renderTemplate(w, "home.html", data)
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
    data := PageData{
        Title:   "Hello",
        Message: "Hello, World!",
    }
    renderTemplate(w, "home.html", data)
}

func greetHandler(w http.ResponseWriter, r *http.Request) {
    name := r.FormValue("name")
    if name == "" {
        name = "Tamu"
    }
    data := PageData{
        Title:   "Sapa",
        Message: "Halo, " + name + "! Senang bertemu denganmu.",
    }
    renderTemplate(w, "home.html", data)
}

func renderTemplate(w http.ResponseWriter, tmpl string, data PageData) {
    t, err := template.ParseFiles(tmpl)
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    t.Execute(w, data)
}