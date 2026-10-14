# Wrestling News Daily

A daily pro wrestling news page, live at https://coderdave619.github.io.

Every 6 hours a GitHub Action runs `build.py`, which reads the news feeds in `feeds.json`, ranks the stories, and writes `index.html`.

- `layout.json`: columns, sizes and story counts (set with the layout editor)
- `companies.json`: each company's colors, logo, shows and events
- `schedule.json`: weekly TV and upcoming big shows
- `spotlight.json`: the Meltzer Post of the Day
- `ranking.json`: how stories are scored

To update right away, open the Actions tab, pick "Update news" and press "Run workflow".
