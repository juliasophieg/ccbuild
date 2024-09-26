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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

const Step4: React.FC = () => {
  const { control } = useFormContext()

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
    <>
      <div className='flex w-full flex-row justify-end'>
        <Button variant='outlined' onClick={() => append({})} sx={{ mt: 2 }}>
          Add Variation
        </Button>
      </div>
      <Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ändra</TableCell>
                <TableCell>Antal (st)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Marknadplatsen</TableCell>
                <TableCell>Åtkomlighet</TableCell>
                <TableCell>Hus</TableCell>
                <TableCell>Våning</TableCell>
                <TableCell>Room</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((field, index) => (
                <TableRow key={field.id}>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDialog(index)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => remove(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell
                    sx={{
                      maxWidth: 100,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.quantity`}
                      defaultValue={1}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant='outlined'
                          fullWidth
                          type='number'
                          sx={{ maxWidth: '100px' }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 200,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.status`}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          variant='outlined'
                          fullWidth
                          sx={{ maxWidth: '200px' }}
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
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 200,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.marketplaces`}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          variant='outlined'
                          fullWidth
                          sx={{ maxWidth: '200px' }}
                        >
                          <MenuItem value='Ej publicerad'>
                            Ej publicerad
                          </MenuItem>
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
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 200,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.accesability`}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          select
                          variant='outlined'
                          fullWidth
                          sx={{ maxWidth: '200px' }}
                        >
                          <MenuItem value='Lätt Åtkomlig'>
                            Lätt Åtkomlig
                          </MenuItem>
                          <MenuItem value='Åtkomlig men planering och specialverktyg kan krävas'>
                            Åtkomlig men planering och specialverktyg kan krävas
                          </MenuItem>
                          <MenuItem value='Begränsad åtkomlighet'>
                            Begränsad åtkomlighet
                          </MenuItem>
                        </TextField>
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 100,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.location.house`}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant='outlined'
                          fullWidth
                          sx={{ maxWidth: '100px' }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 100,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.location.floor`}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant='outlined'
                          fullWidth
                          sx={{ maxWidth: '100px' }}
                        />
                      )}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 100,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Controller
                      control={control}
                      name={`variations.${index}.location.room`}
                      defaultValue=''
                      render={({ field }) => (
                        <TextField
                          {...field}
                          variant='outlined'
                          fullWidth
                          sx={{ maxWidth: '100px' }}
                        />
                      )}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {fields.map((field, index) => (
          <Dialog
            key={field.id}
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
                defaultValue=''
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
        ))}
      </Box>
    </>
  )
}

export default Step4
