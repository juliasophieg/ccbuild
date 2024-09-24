import React, { useState } from 'react'
import { useFormContext, useFieldArray, Controller } from 'react-hook-form'
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'

const Step4: React.FC = () => {
  const { control, register, setValue, getValues } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variations',
  })

  const [open, setOpen] = useState<number | null>(null)

  const handleOpenDialog = (index: number) => {
    setOpen(index)
  }

  const handleCloseDialog = () => {
    setOpen(null)
  }

  return (
    <Box>
      {fields.map((field, index) => (
        <Box key={field.id} mb={2}>
          <Controller
            control={control}
            name={`variations.${index}.quantity`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Quantity'
                variant='outlined'
                fullWidth
                type='number'
              />
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.status`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Status'
                select
                variant='outlined'
                fullWidth
              >
                <MenuItem value='Inventerad'>Inventerad</MenuItem>
                <MenuItem value='Inventerad - i byggnad'>
                  Inventerad - i byggnad
                </MenuItem>
                <MenuItem value='Inventerad - i lager/förråd'>
                  Inventerad - i lager/förråd
                </MenuItem>
                <MenuItem value='På rekonditionering'>
                  På rekonditionering
                </MenuItem>
                <MenuItem value='I lager'>I lager</MenuItem>
                <MenuItem value='Bevarad (slutstatus)'>
                  Bevarad (slutstatus)
                </MenuItem>
                <MenuItem value='Återbrukad i projektet (slutstatus)'>
                  Återbrukad i projektet (slutstatus)
                </MenuItem>
                <MenuItem value='Återbrukad externt av annan aktör (slutstatus)'>
                  Återbrukad externt av annan aktör (slutstatus)
                </MenuItem>
                <MenuItem value='Avfallshanterad (slutstatus)'>
                  Avfallshanterad (slutstatus)
                </MenuItem>
              </TextField>
            )}
          />

          <Controller
            control={control}
            name={`variations.${index}.marketplaces`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Marketplaces'
                select
                variant='outlined'
                fullWidth
              >
                <MenuItem value='Ej publicerad'>Ej publicerad</MenuItem>
                <MenuItem value='Publicerad som intern annons'>
                  Publicerad som intern annons
                </MenuItem>
                <MenuItem value='Publicerad som extern annons'>
                  Publicerad som extern annons
                </MenuItem>
                <MenuItem value='Reserverad'>Reserverad</MenuItem>
                <MenuItem value='Såld'>Såld</MenuItem>
                <MenuItem value='Avpublicerad'>Avpublicerad</MenuItem>
                <MenuItem value='Automatiskt avpublicerad'>
                  Automatiskt avpublicerad
                </MenuItem>
              </TextField>
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.accesability`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Accesability'
                select
                variant='outlined'
                fullWidth
                value={field.value || ''}
              >
                <MenuItem value='Lätt Åtkomlig'>Lätt Åtkomlig</MenuItem>
                <MenuItem value='Åtkomlig men planering och specialverktyg kan krävas'>
                  Åtkomlig men planering och specialverktyg kan krävas
                </MenuItem>
                <MenuItem value='Begränsad åtkomlighet'>
                  Begränsad åtkomlighet
                </MenuItem>
              </TextField>
            )}
          />
          <Controller
            control={control}
            name={`variations.${index}.location.location`}
            render={({ field }) => (
              <TextField
                {...field}
                label='Location'
                variant='outlined'
                fullWidth
              />
            )}
          />

          <Controller
            control={control}
            name={`variations.${index}.location.house`}
            render={({ field }) => (
              <TextField
                {...field}
                label='House'
                variant='outlined'
                fullWidth
              />
            )}
          />

          <Controller
            control={control}
            name={`variations.${index}.location.room`}
            render={({ field }) => (
              <TextField {...field} label='Room' variant='outlined' fullWidth />
            )}
          />

          <Button
            variant='contained'
            color='primary'
            onClick={() => handleOpenDialog(index)}
          >
            Edit Additional Fields
          </Button>

          <Dialog
            open={open === index}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth='sm'
          >
            <DialogTitle>Edit Variation Details</DialogTitle>
            <DialogContent>
              <Controller
                control={control}
                name={`variations.${index}.pickup.firstDeliveryDate`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='First Delivery Date'
                    type='date'
                    variant='outlined'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin='normal'
                  />
                )}
              />
              <Controller
                control={control}
                name={`variations.${index}.pickup.availableDate`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Available Date'
                    type='date'
                    variant='outlined'
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    margin='normal'
                  />
                )}
              />

              <Controller
                control={control}
                name={`variations.${index}.location.location`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Location'
                    variant='outlined'
                    fullWidth
                  />
                )}
              />

              <Controller
                control={control}
                name={`variations.${index}.location.house`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='House'
                    variant='outlined'
                    fullWidth
                  />
                )}
              />

              <Controller
                control={control}
                name={`variations.${index}.location.room`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Room'
                    variant='outlined'
                    fullWidth
                  />
                )}
              />

              <Controller
                control={control}
                name={`variations.${index}.accesability`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Accesability'
                    select
                    variant='outlined'
                    fullWidth
                    value={field.value || ''}
                  >
                    <MenuItem value='Lätt Åtkomlig'>Lätt Åtkomlig</MenuItem>
                    <MenuItem value='Åtkomlig men planering och specialverktyg kan krävas'>
                      Åtkomlig men planering och specialverktyg kan krävas
                    </MenuItem>
                    <MenuItem value='Begränsad åtkomlighet'>
                      Begränsad åtkomlighet
                    </MenuItem>
                  </TextField>
                )}
              />

              <Controller
                control={control}
                name={`variations.${index}.dismantling`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Dismantling'
                    select
                    variant='outlined'
                    fullWidth
                  >
                    <MenuItem value='Enkel att demontera/demontering krävs ej'>
                      Enkel att demontera/demontering krävs ej
                    </MenuItem>
                    <MenuItem value='Demonterbar men specialverktyg kan krävas'>
                      Demonterbar men specialverktyg kan krävas
                    </MenuItem>
                    <MenuItem value='Begränsad demonterbarhet'>
                      Begränsad demonterbarhet
                    </MenuItem>
                  </TextField>
                )}
              />
              <Controller
                control={control}
                name={`variations.${index}.decision.location1`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Decision Location 1'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                )}
              />
              <Controller
                control={control}
                name={`variations.${index}.decision.location2`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Decision Location 2'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                )}
              />
              <Controller
                control={control}
                name={`variations.${index}.decision.location3`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Decision Location 3'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                )}
              />
              <Controller
                control={control}
                name={`variations.${index}.decision.location4`}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label='Decision Location 4'
                    variant='outlined'
                    fullWidth
                    margin='normal'
                  />
                )}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} color='primary'>
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Button
            variant='contained'
            color='secondary'
            onClick={() => remove(index)}
          >
            Remove Variation
          </Button>
        </Box>
      ))}

      <Button variant='contained' onClick={() => append({})}>
        Add Variation
      </Button>
    </Box>
  )
}

export default Step4
