---
title: Contact
permalink: /contact/
layout: page
hero_image: /images/hero-contact.jpg
---

<div class="content-wrapper">
    <div class="about-para-div"><p>Feel free to reach out to me on any of the following platforms</p></div>
    <div class="about-para-div">
        <p>
            <a href="https://DevOpsDave.net/discord" target="_blank"><i class="fa-fw fa-brands fa-discord"></i> Discord</a><br />
        </p>
        <p>
            <a href="https://www.youtube.com/@devopsdave" target="_blank"><i class="fa-fw fa-brands fa-youtube"></i> YouTube</a><br />
        </p>
        <p>
            <a href="https://kick.com/devopsdave" target="_blank"><i class="fa-fw fa-brands fa-kickstarter-k"></i> Kick</a><br />
        </p>
    </div>
</div>

<div class="outer-container">
    <div class="contact-container">
        <form method="POST" action="#">
            <div class="form-group">
                <p>
                    <label for="">Name*</label><br />
                    <input type="text" id="form-name" name='name' />
                </p>
            </div>
            <div class="form-group">
                <p>
                    <label for="">Email Address*</label><br />
                    <input type="text" id="form-email" name='email' />
                </p>
            </div>
            <div class="form-group">
                <p>
                    <label for="">Message*</label><br />
                    <textarea id="form-body" name="body" rows="10" cols="30"></textarea>
                    <input type="hidden" id="form-location" value="DevOpsDave.net">
                </p>
            </div>
            <div class="form-group">
                <button class="submit">
                    <span class="button-text">
                        Send Message
                    </span>
                    <div class="loader-container hidden">
                        <div class="loader">
                            <img src="/images/loader2.gif" alt="" />
                        </div>
                    </div>
                </button>
            </div>
        </form>
    </div>
</div>



<script type="text/javascript">
    window.shouldrun = function() {        
        // const urlParams = new URLSearchParams(window.location.search);
        // const contact_form_flag = urlParams.get('flag', false);
        // if (contact_form_flag) {
        //     $('.outer-container').removeClass('hidden');
        // }
        $('form').on('submit', function(event) {
            event.preventDefault();
            var data = {
                email: encodeURIComponent($('#form-email').val()),
                name: encodeURIComponent($('#form-name').val()),
                body: encodeURIComponent($('#form-body').val()),
                location: encodeURIComponent($('#form-location').val())
            };
            $('.button-text').hide();
            $('.loader-container').show();
            $.ajax({
                url: 'https://fimg8ufejg.execute-api.eu-west-1.amazonaws.com/default/dave-albert-lambda-mail-form',
                method: 'POST',
                data: data,
                dataType: 'json'
            }).done(function(result) {
                if (result.messageId) {
                    console.log(result.messageId);
                    $('.loader-container').hide();
                    $('.button-text').show();
                    $('#form-email').val("");
                    $('#form-name').val("");
                    $('#form-body').val("");
                    setTimeout(function() {
                        alert('Thank you for contacting us.');
                    }, 300);
                } else {
                    alert('Sorry, there was a problem.  Please check the form details, or you can email mail@dave-albert.com');
                }
            });
        });
    }
</script>
<style type="text/css">
.loader-container .loader img {
    height: 40px;
}
</style>
