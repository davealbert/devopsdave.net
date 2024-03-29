---
layout: default
---

<div class="content-indent">
    <div class="content-wrapper">
        <div class="hero-wrapper">
            <div class="hero">
                <img src="/images/sre-hero.jpg" />
            </div>
        </div>
        <!-- <h1>Stream Status</h1>
        <div class="content-wrapper">
        <iframe width="396" height="247" src="https://www.youtube.com/embed/live_stream?channel=UCuZgVpvUQq66jIHsVOCh6Tw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> -->
            <h1>Latest Stream/News</h1>
            {% for post in site.posts limit:1 %}
                <div class="content-wrapper">
                    <a href="{{ post.url }}">{{ post.title }}
                    <div class="index-image-wrapper">
                        <div class="post-image">
                        {% if post.post_image %}
                        <img src="{{ post.post_image }}" />
                        {% else %}
                        <img src="/images/blog-default-image.jpg" />
                        {% endif %}
                        </div>
                    </div>
                    </a>
                    <p>{{ post.description }}</p>
                </div>
            {% endfor %}
        <h1>Discovering the Art of DevOps, Engineering, and Beyond</h1>
        <div class="content-wrapper">
            I'm Dave, a seasoned professional with a dynamic career spanning DevOps Engineering, Platform Engineering, Site Reliability Engineering, and Software Development. This experiance included a stint as the CTO and co-founder of a startup. My journey through the tech world has been nothing short of an adventure, filled with learning, growth, and a constant drive to innovate.
        </div>
        <h1>My Journey: From Code Lines to Community Lines</h1>
        <div class="content-wrapper">
            <p>I began my career as a Network Administrator/IT Manager/Software Developer, fascinated by the power of code to transform ideas into reality. As I delved deeper into the tech realm, I expanded my expertise into the realms of DevOps and Platform Engineering, discovering the intricate dance of maintaining robust, scalable systems. My foray into Site Reliability Engineering further deepened my appreciation for system resilience and the critical balance between operational efficiency and innovative development.</p>
            <p>&nbsp;</p>
            <p>Throughout my career, I've learned that technology is not just about systems and code; it's about the people who use it and the communities that grow around it. That's why I'm thrilled to be streaming on Kick, Twitch and YouTube while expanding my YouTube channel, focusing on the interplay of technology, education, and community building.</p>
        </div>
        <h1>What Awaits You Here</h1>
        <div class="content-wrapper">
            On my channel and streams, expect a mix of deep technical dives, practical tutorials, and engaging discussions about the latest in DevOps, platform engineering, and much more. Whether you're a seasoned professional, an aspiring tech enthusiast, or somewhere in between, there's something here for everyone. Most of all I want to be truly engaged with my community, so please feel free to reach out with any questions, comments, or suggestions.
            <div class="content-wrapper">
                <ul class="task-list">
                    <li class="task-list-item">
                        <b>Deep-Dive Sessions:</b> Explore the intricacies of modern tech infrastructure, from containerization to cloud architectures. These sessions are designed to demystify complex concepts and provide you with actionable insights.
                    </li>
                    <li class="task-list-item">
                        <b>Practical Tutorials:</b> Walk through real-world scenarios, covering everything from basic setup to advanced configuration. These hands-on guides are aimed at enhancing your skills and confidence in tackling tech challenges.
                    </li>
                    <li class="task-list-item">
                        <b>Community Discussions:</b> Join in as we discuss the latest trends, share experiences, and learn from each other. My belief is that knowledge grows when shared, and these discussions are all about fostering a collaborative learning environment.
                    </li>
                    <li class="task-list-item">
                        <b>Personal Insights:</b> Gain insights from my years of experience. I'll share stories, lessons learned, and tips that have helped shape my professional journey.
                    </li>
                </ul>
            </div>
        </div>
        <div class="content-wrapper">
        </div>
        <h1>Join the Community</h1>
        <div class="content-wrapper">
            I invite you to join our growing <a href="https://DevOpsDave.net/discord" target="_blank">Discord</a> and subscribe/follow me on your plaform(s) of choice:
            <div class="embed-wrapper">
                <ul>
                    <li><a href="https://www.youtube.com/@devopsdave" target="_blank">YouTube</a></li>
                    <li><a href="https://www.twitch.tv/devopsdave" target="_blank">Twitch</a></li>
                    <li><a href="https://kick.com/devopsdave" target="_blank">Kick</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
