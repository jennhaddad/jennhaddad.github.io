# Jennifer Haddad

## Development

```
vagrant up                                    # starts the VM
vagrant ssh                                   # logs in to the VM
cd /vagrant                                   # goes the right directory
jekyll serve --host 0.0.0.0 --force_polling   # starts the server
```

To test site in production:

```
JEKYLL_ENV=production jekyll serve --host 0.0.0.0 --force_polling
```
