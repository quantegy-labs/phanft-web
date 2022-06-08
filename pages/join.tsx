import { Box, Button, Container, TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const styles = {
  centeredIntro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    mb: 4,
  },
  joinText: {
    mb: 4,
    textAlign: "center",
  },
  formWrap: {
    my: 3,
  },
};

const JoinPage: NextPage = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <>
      <Head>
        <title>PhanFT | Join Our Membership Club</title>
        {/* <link
          href="https://cdn-images.mailchimp.com/embedcode/classic-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <script
          async
          type="text/javascript"
          src="https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        ></script>
        <script type="text/javascript">
          function() {}
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[0] = 'EMAIL';
            ftypes[0] = 'email';
            fnames[1] = 'FNAME';
            ftypes[1] = 'text';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);
        </script> */}
      </Head>
      <Layout>
        <Box sx={styles.centeredIntro}>
          <Typography variant="h2">Sign Up</Typography>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Join Our Membership Club
          </Typography>
        </Box>
        <Container maxWidth="md">
          <Typography sx={styles.joinText}>
            Join in on all the fun happening with our phriendly community and
            reap the benefits that the PhanFT club has to offer by filling in
            your email below.
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
                      value=""
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
      </Layout>
    </>
  );
};

export default JoinPage;
