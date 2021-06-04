import React from "react"
import { navigate } from "gatsby-link"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import {
    withStyles,
    makeStyles,
  } from '@material-ui/core/styles';

  function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgb(255, 145, 0)',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'rgb(255, 145, 0)',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          //borderColor: 'rgb(255, 145, 0)',
        },
        '&:hover fieldset': {
          //borderColor: 'rgb(255, 145, 0)',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'rgb(255, 145, 0)',
        },
      },
    },
  })(TextField);

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      //action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <Grid container spacing={2} justify="flex-start" alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="name"
            label="Imię"
            color="secondary"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            style={{color:"rgb(240, 56, 0)"}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="tel"
            label="Telefon"
            color="secondary"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            style={{ color:"rgb(240, 56, 0)"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="mail"
            label="Mail"
            color="secondary"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            style={{color:"rgb(240, 56, 0)"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="message"
            label="Wiadomość"
            color="secondary"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChange}
            fullWidth
            style={{color:"rgb(240, 56, 0)"}}
          />
        </Grid>
        <Grid item xs={12} style={{display: "flex"}}>
          <Button variant="contained" color="primary" style={{marginLeft: "auto"}}>
            Wyślij
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
