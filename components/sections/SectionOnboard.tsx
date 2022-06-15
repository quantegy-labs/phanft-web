import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";

const styles = {
  headings: {
    textAlign: "center",
    mb: 2,
  },
  joinText: {
    mb: 4,
    textAlign: "center",
  },
  formWrap: {
    my: 3,
  },
};

const SectionOnboard = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  return (
    <section id="onboard">
      <Box sx={styles.headings}>
        <Typography variant="h3">Sign Up</Typography>
        <Typography variant="h4">Join Our Membership Club</Typography>
      </Box>
      <Container maxWidth="md">
        <Typography sx={styles.joinText}>
          Join in on all the fun happening with our phriendly community and reap
          the benefits that the PhanFT club has to offer by filling in your
          email below.
        </Typography>
        <Box sx={styles.formWrap}>
          <div id="mc_embed_signup" className="mcformpad">
            <form
              action="https://gmail.us20.list-manage.com/subscribe/post?u=f4f6160f47493c9ac07172dc3&amp;id=09f84a8635"
              method="post"
              id="form_25429"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate={true}
            >
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-group">
                  <TextField
                    id="mce-EMAIL_25429"
                    name="EMAIL"
                    type="email"
                    label="Email Address"
                    placeholder="colonel.forbin@gamehenge.xyz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    fullWidth
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  />
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  />
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div
                  style={{ position: "absolute", left: "-5000px" }}
                  aria-hidden="true"
                >
                  <input
                    type="text"
                    name="b_9e661be94b89b985bac91915f_c10d59ba7d"
                    tabIndex={-1}
                    id="undefined_25429"
                  />
                </div>
                <Box sx={{ clear: "both", mt: 2 }}>
                  <Button
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe_25429"
                    variant="contained"
                    fullWidth
                  >
                    Subscribe
                  </Button>
                </Box>
              </div>
            </form>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default SectionOnboard;
